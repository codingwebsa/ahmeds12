"use client"

import React from "react"
import Image, { ImageProps } from "next/image"

import { cn } from "~/lib/utils"

type Props = {} & ImageProps

export default function MDImage({ className, ...props }: Props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image className={cn("rounded-xl border", className)} {...props} />
}
