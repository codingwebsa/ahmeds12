"use client"

import React, { ReactNode } from "react"
import MasonryReact, { MasonryProps } from "react-masonry-css"

type Props = { children: ReactNode } & MasonryProps

export default function Masonry({ children, ...props }: Props) {
  return <MasonryReact {...props}>{children}</MasonryReact>
}
