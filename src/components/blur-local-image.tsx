import React from "react"
import Image, { type ImageProps } from "next/image"

import { getPlaceholderFromLocalImage } from "~/lib/get-placeholder"

type Props = {} & ImageProps

export default async function BlurLocalImage({
  src,
  width,
  height,
  alt,
  ...props
}: Props) {
  const { base64: blurDataURL, metadata } = await getPlaceholderFromLocalImage({
    src: src as string,
  })

  return (
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={blurDataURL}
      width={width ?? metadata.width}
      height={height ?? metadata.height}
      alt={alt}
      {...props}
    />
  )
}
