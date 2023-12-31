"use client"

import React, { useMemo } from "react"
import Link from "next/link"

import type { Items } from "~/lib/toc"

interface Props {
  items: Items
}

export default function Topics({ items: toc }: Props): React.JSX.Element {
  const craftHeadings = useMemo(
    () =>
      toc.items
        ? toc.items.flatMap((item) =>
            [
              { url: item.url, title: item.title },
              item?.items?.map((item) => ({
                url: item.url,
                title: item.title,
              })),
            ]
              .flat()
              .filter(Boolean)
          )
        : [],
    [toc]
  )

  return (
    <aside className="mt-6 flex flex-col gap-2">
      {craftHeadings.map((item, i) => {
        if (!item) return null

        return (
          <Link
            className="line-clamp-2 text-sm text-neutral-700 transition-colors [text-wrap:balance] hover:text-neutral-950 dark:text-neutral-400 hover:dark:text-neutral-200"
            href={item.url}
            key={`toc-${i}`}
          >
            {item.title}
          </Link>
        )
      })}
    </aside>
  )
}
