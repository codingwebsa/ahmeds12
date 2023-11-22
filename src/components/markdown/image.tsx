"use client"

import React from "react"
import Image, { ImageProps } from "next/image"

import { cn } from "~/lib/utils"

type Props = {} & ImageProps

export default function MDImage({ className, ...props }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      className={cn("my-4 rounded-xl border", className)}
      width={1080}
      height={720}
      {...props}
    />
  )
}
