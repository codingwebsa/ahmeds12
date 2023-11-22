import React from "react"

import Masonry from "~/components/masonry"

import Post from "./_components/post"
import Prototype from "./_components/prototype"
import Video from "./_components/video"
import { allPosts, allPrototypes, allVideos } from ".contentlayer/generated"

export default function CraftPage() {
  const posts = allPosts.map((craft) => ({
    title: craft.title,
    description: craft.description,
    slug: craft.slugAsParams,
    date: craft.date,
    ogImage: craft.image,
    isPublished: craft.published,
    type: craft.type,
  }))
  const videos = allVideos.map((video) => ({
    title: video.title,
    description: video.description,
    date: video.date,
    video: video.video,
    poster: video.poster,
    isPublished: video.published,
    type: video.type,
  }))
  const prototypes = allPrototypes.map((prototype) => ({
    title: prototype.title,
    description: prototype.description,
    slug: prototype.slugAsParams,
    date: prototype.date,
    video: prototype.video,
    poster: prototype.poster,
    isPublished: prototype.published,
    type: prototype.type,
  }))

  const masonryColumns = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1,
    300: 1,
  }

  const crafts = [
    ...posts.filter((x) => Boolean(x.isPublished)),
    ...prototypes.filter((x) => Boolean(x.isPublished)),
    ...videos.filter((x) => Boolean(x.isPublished)),
  ]

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={masonryColumns}
        className="flex w-auto"
        columnClassName="mx-1 space-y-2"
      >
        {crafts.map((craft, i) => {
          switch (craft.type) {
            case "Post":
              return (
                <Post
                  key={`craft-${i}`}
                  date={craft.date}
                  imageUrl={craft.ogImage ?? ""}
                  slug={craft.slug}
                  title={craft.title}
                />
              )
            case "Prototype":
              return (
                <Prototype
                  key={`craft-${i}`}
                  date={craft.date}
                  slug={craft.slug}
                  title={craft.title}
                  poster={craft.poster}
                  videoUrl={craft.video}
                />
              )
            case "Video":
              return (
                <Video
                  key={`craft-${i}`}
                  title={craft.title}
                  src={craft.video}
                  poster={craft.poster}
                  description={craft.description}
                />
              )
          }
        })}
      </Masonry>
    </div>
  )
}
