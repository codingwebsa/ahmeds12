"use client"

import React from "react"
import { motion } from "framer-motion"

import CodeblockPreview from "../../codeblock-preview"

export default function AnimatedPath() {
  const width = 317
  const height = 80
  const path =
    "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"

  return (
    <CodeblockPreview>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path
          d={path}
          className="stroke-neutral-800 dark:stroke-neutral-300"
          strokeOpacity="0.2"
        />
        <rect
          d={path}
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#pulse-4)"
        />
        <path
          d={path}
          stroke="url(#pulse-4)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <defs>
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
              y1: [height, height / 2],
              y2: [height * 2, height],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            id="pulse-4"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2EB9DF" stopOpacity="0" />
            <stop stopColor="#2EB9DF" />
            <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </CodeblockPreview>
  )
}
