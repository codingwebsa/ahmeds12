import React from "react"

import CodeblockPreview from "../../codeblock-preview"

export default function Path() {
  return (
    <CodeblockPreview>
      <svg width="317" height="80" viewBox="0 0 317 80" fill="none">
        <path
          d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"
          className="stroke-neutral-800 dark:stroke-neutral-300"
          stroke-opacity="0.2"
        />
      </svg>
    </CodeblockPreview>
  )
}
