import React, { ComponentPropsWithoutRef } from "react"

import { cn } from "~/lib/utils"

type Props = {} & ComponentPropsWithoutRef<"video">

export default function MDVideo({ src, className, ...props }: Props) {
  return (
    <video
      src={src}
      className={cn("w-full h-auto rounded-xl border my-2", className)}
      loop
      autoPlay
      playsInline
      muted
      {...props}
    ></video>
  )
}
