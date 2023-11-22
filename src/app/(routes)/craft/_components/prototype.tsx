"use client"

import React, { useState } from "react"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/icons"

export default function Prototype({
  videoUrl,
  slug,
  title,
  date,
  poster,
}: {
  videoUrl: string
  slug: string
  title: string
  date: string
  poster: string
}) {
  const [isLoading, setIsLoading] = useState(true)

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
          src={videoUrl}
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoading(false)}
          className="h-auto w-full min-w-full"
        />
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
