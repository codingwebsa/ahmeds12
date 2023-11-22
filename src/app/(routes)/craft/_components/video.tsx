"use client"

import React, { useState } from "react"

import { cn } from "~/lib/utils"

export default function Video({
  title,
  src,
  poster,
  description,
}: {
  title: string
  src: string
  poster: string
  description: string
}) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-lg border p-0")}
    >
      {/* poster */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        className={cn(
          "absolute inset-0 z-10 -m-4 min-w-full blur-md",
          !isLoading && "hidden"
        )}
        alt=""
      />
      <video
        className="h-auto w-full rounded-lg brightness-90"
        onLoadedData={() => setIsLoading(false)}
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
