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
        "border dark:bg-[#1c1c1c] rounded-lg min-h-[300px] my-5 flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
