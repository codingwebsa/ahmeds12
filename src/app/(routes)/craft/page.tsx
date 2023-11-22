import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"
import Masonry from "~/components/masonry"

import { allCrafts } from ".contentlayer/generated"

export default function CraftPage() {
  const crafts = allCrafts.map((craft) => ({
    title: craft.title,
    description: craft.description,
    slug: craft.slugAsParams,
    date: craft.date,
    ogImage: craft.ogImage,
    isPublished: craft.published,
    contentType: craft.contentType,
    thumbnailVideo: craft.thumbnailVideo,
  }))

  const masonryColumns = {
    default: 3,
    1024: 3,
    768: 2,
    640: 1,
    300: 1,
  }

  return (
    <div className="p-4">
      <Masonry
        breakpointCols={masonryColumns}
        className="flex w-auto"
        columnClassName="mx-1 space-y-2"
      >
        {crafts.map((craft, i) => {
          switch (craft.contentType) {
            case "POST":
              return (
                <Craft
                  key={`craft-${i}`}
                  date={craft.date}
                  // TODO: fill in the null things
                  imageUrl={craft.ogImage ?? ""}
                  slug={craft.slug}
                  title={craft.title}
                />
              )
            case "PROTOTYPE":
              return (
                <Prototype
                  key={`craft-${i}`}
                  date={craft.date}
                  slug={craft.slug}
                  title={craft.title}
                  videoUrl={craft.thumbnailVideo ?? ""}
                />
              )
            case "VIDEO":
              return (
                <Video
                  title={craft.title}
                  key={`craft-${i}`}
                  src={craft.thumbnailVideo ?? "Hello World"}
                  description={craft.description ?? "By Ahmed"}
                />
              )
          }
        })}
      </Masonry>
    </div>
  )
}

function Video({
  title,
  src,
  description,
}: {
  title: string
  src: string
  description: string
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg border p-0")}
    >
      <video
        className="h-auto w-full rounded-lg brightness-90"
        loop
        autoPlay
        playsInline
      >
        <source src={src} />
      </video>
      <div
        className={cn(
          "absolute inset-0 bottom-0 flex items-center",
          "before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-16 before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:content-['']"
        )}
      >
        <div className="z-10 mt-auto flex w-full justify-between px-3 py-3 text-sm">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

function Craft({
  imageUrl,
  slug,
  title,
  date,
}: {
  imageUrl: string
  slug: string
  title: string
  date: string
}) {
  return (
    <Link
      href={`/craft/${slug}`}
      className="flex w-full flex-col rounded-xl border bg-zinc-50 p-1 dark:bg-zinc-900"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          "before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-16 before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:content-['']"
        )}
      >
        <Image
          src={imageUrl}
          className="h-auto w-full min-w-full rounded-lg"
          width={1920}
          height={1486}
          alt=""
        />
        <div className="absolute inset-x-0 bottom-0 z-10 mt-auto flex w-full justify-between px-3 py-3 text-sm">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{date}</p>
        </div>
      </div>
      <Button className="mt-1 flex items-center gap-2" variant="secondary">
        Read Post <Icons.arrowRight className="h-4 w-4" />
      </Button>
    </Link>
  )
}
function Prototype({
  videoUrl,
  slug,
  title,
  date,
}: {
  videoUrl: string
  slug: string
  title: string
  date: string
}) {
  return (
    <Link
      href={`/craft/${slug}`}
      className="flex w-full flex-col rounded-xl border bg-zinc-50 p-1 dark:bg-zinc-900"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          "before:pointer-events-none before:absolute before:inset-x-0 before:-bottom-16 before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:content-['']"
        )}
      >
        <video src={videoUrl} className="h-auto w-full min-w-full" />
        <div className="absolute inset-x-0 bottom-0 z-10 mt-auto flex w-full justify-between px-3 py-3 text-sm">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{date}</p>
        </div>
      </div>
      <Button className="mt-1 flex items-center gap-2" variant="secondary">
        View Prototype <Icons.arrowRight className="h-4 w-4" />
      </Button>
    </Link>
  )
}
