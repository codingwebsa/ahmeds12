import React, { CSSProperties } from "react"

import { cn } from "~/lib/utils"

import CodeblockPreview from "../../codeblock-preview"

export default function gridLine() {
  return (
    <CodeblockPreview className="relative">
      <div className="relative w-full">
        <div
          style={
            {
              "--bg": "hsl(var(--background))",
              "--color": "hsl(var(--foreground)/0.5)",
              "--height": "1px",
              "--width": "5px",
              "--fade-stop": "90%",
              "--offset": "-100px",
            } as CSSProperties
          }
          className={cn(
            "absolute left-[calc(var(--offset)/2_*_-1)] h-[var(--height)] w-[calc(100%_+_var(--offset))] ![background-size:var(--width)_var(--height)] ![mask-composite:exclude] [-webkit-mask:linear-gradient(to_left,var(--bg)_var(--fade-stop),transparent),linear-gradient(to_right,var(--bg)_var(--fade-stop),transparent),linear-gradient(black,black)] [background:linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0%,transparent)]"
          )}
        />
      </div>
    </CodeblockPreview>
  )
}
