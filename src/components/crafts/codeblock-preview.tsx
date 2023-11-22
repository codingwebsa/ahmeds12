import React, { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "~/lib/utils"

type Props = { children: ReactNode } & ComponentPropsWithoutRef<"div">

export default function CodeblockPreview({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      className={cn(
        "my-5 flex min-h-[300px] items-center justify-center rounded-lg border dark:bg-[#1c1c1c]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
