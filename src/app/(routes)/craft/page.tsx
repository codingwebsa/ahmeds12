import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"
import Masonry from "~/components/masonry"

export default function CraftPage() {
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
        columnClassName="mx-1"
      >
        <Video
          title="Hello there"
          date={"October 2023"}
          src="/images/crafts/demo/nextjs.mp4"
        />
        <Craft
          title="SwiftUI Video Scrubber"
          date="Sept 2023"
          imageUrl="/images/crafts/demo/demo.jpg"
          slug=""
        />
        <Prototype
          title="Hello there"
          date={"November 2023"}
          videoUrl="/images/crafts/demo/mercury.mp4"
          slug=""
        />
      </Masonry>
    </div>
  )
}

function Video({
  title,
  src,
  date,
}: {
  title: string
  src: string
  date: string
}) {
  return (
    <div
      className={cn("w-full rounded-lg relative p-0 border overflow-hidden")}
    >
      <video
        className="w-full h-auto rounded-lg brightness-90"
        loop
        autoPlay
        playsInline
      >
        <source src={src} />
      </video>
      <div
        className={cn(
          "absolute bottom-0 inset-0 flex items-center",
          "before:content-[''] before:absolute before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:-bottom-16 before:inset-x-0 before:pointer-events-none"
        )}
      >
        <div className="flex justify-between w-full px-3 py-3 text-sm mt-auto z-10">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{date}</p>
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
      className="border rounded-xl p-1 flex flex-col w-full bg-zinc-900"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          "before:content-[''] before:absolute before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:-bottom-16 before:inset-x-0 before:pointer-events-none"
        )}
      >
        <Image
          src={imageUrl}
          className="w-full min-w-full h-auto rounded-lg"
          width={1920}
          height={1486}
          alt=""
        />
        <div className="flex justify-between w-full px-3 py-3 text-sm mt-auto z-10 absolute inset-x-0 bottom-0">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{date}</p>
        </div>
      </div>
      <Button className="flex items-center gap-2 mt-1" variant="secondary">
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
      className="border rounded-xl p-1 flex flex-col w-full bg-zinc-900"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          "before:content-[''] before:absolute before:h-52 before:w-full before:bg-[linear-gradient(to_top,rgba(0,0,0,0.9),50%,rgba(0,0,0,0))] before:-bottom-16 before:inset-x-0 before:pointer-events-none"
        )}
      >
        <video src={videoUrl} className="w-full min-w-full h-auto" />
        <div className="flex justify-between w-full px-3 py-3 text-sm mt-auto z-10 absolute inset-x-0 bottom-0">
          <p className="line-clamp-1 text-white">{title}</p>
          <p className="text-neutral-300">{date}</p>
        </div>
      </div>
      <Button className="flex items-center gap-2 mt-1" variant="secondary">
        View Prototype <Icons.arrowRight className="h-4 w-4" />
      </Button>
    </Link>
  )
}
