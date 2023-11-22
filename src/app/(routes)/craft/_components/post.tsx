import React from "react"
import Link from "next/link"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import BlurLocalImage from "~/components/blur-local-image"
import { Icons } from "~/components/icons"

export default function Post({
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
        <BlurLocalImage
          src={imageUrl}
          className="h-auto w-full min-w-full rounded-lg"
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
