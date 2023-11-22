"use client"

import React from "react"

import { Button } from "~/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip"
import { Icons } from "~/components/icons"

export default function CraftPageHeader({
  title,
  date,
}: {
  title: string
  date: string
}) {
  function copyUrl() {
    navigator.clipboard.writeText(location.href)
  }
  return (
    <div className="flex items-center gap-1">
      <div className="flex-1">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-base text-neutral-700 dark:text-neutral-400">
          {date}
        </p>
      </div>
      <TooltipProvider>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={copyUrl}
                className="rounded-full"
              >
                <Icons.link className="inline-flex h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-neutral-400">Copy</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  )
}
