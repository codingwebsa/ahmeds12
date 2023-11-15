import React, { PropsWithChildren } from "react"
import dynamic from "next/dynamic"

const LenisScroll = dynamic(() => import("~/components/lenis-scroll"), {
  ssr: false,
})

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <LenisScroll />
      {children}
    </>
  )
}
