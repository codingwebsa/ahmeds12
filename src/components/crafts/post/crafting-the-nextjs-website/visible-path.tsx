import React from "react"

import CodeblockPreview from "../../codeblock-preview"

export default function VisiblePath() {
  const height = 80

  return (
    <CodeblockPreview>
      <svg width="317" height="80" viewBox="0 0 317 80" fill="none">
        <path
          d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"
          className="stroke-neutral-800 dark:stroke-neutral-300"
          stroke-opacity="0.2"
        />
        <path
          d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"
          stroke="url(#pulse)"
          stroke-linecap="round"
          stroke-width="2"
        />
        <defs>
          <linearGradient
            id="pulse"
            gradientUnits="userSpaceOnUse"
            x1="0"
            x2="0"
            y1={height - 40}
            y2={height * 2 - 80}
          >
            <stop stop-color="#2EB9DF" stop-opacity="0" />
            <stop stop-color="#2EB9DF" />
            <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </CodeblockPreview>
  )
}
