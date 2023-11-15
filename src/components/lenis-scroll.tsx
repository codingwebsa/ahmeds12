"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

import "~/styles/lenis.css"

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({})
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return null
}
