"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import type { ClassValue } from "clsx"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "~/lib/utils"
import MDImage from "~/components/markdown/image"

import { Skeleton } from "./ui/skeleton"

const MDVideo = dynamic(() => import("~/components/markdown/video"), {
  ssr: false,
  loading: () => <Skeleton className="w-full aspect-video h-auto" />,
})

const components = {
  h1: ({ className, ...props }: { className: ClassValue }) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-xl font-bold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: { className: ClassValue }) => (
    <h2
      className={cn(
        "mt-6 mb-0 scroll-m-20 text-lg font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: { className: ClassValue }) => (
    <h3
      className={cn(
        "mt-7 scroll-m-20 text-[1.2rem] font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: { className: ClassValue }) => (
    <h4
      className={cn(
        "mt-6 scroll-m-20 text-sm font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: { className: ClassValue }) => (
    <h5
      className={cn(
        "mt-5 scroll-m-20 text-xs font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: { className: ClassValue }) => (
    <h6
      className={cn(
        "mt-4 scroll-m-20 text-xs font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: { className: ClassValue }) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: { className: ClassValue }) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:my-1", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: { className: ClassValue }) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: { className: ClassValue }) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: { className: ClassValue }) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: { className: ClassValue }) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg">
      <table className={cn("w-full rounded-lg", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("m-0 border-t p-0", className)} {...props} />
  ),
  th: ({ className, ...props }: { className: ClassValue }) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: { className: ClassValue }) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: { className: ClassValue }) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: { className: ClassValue }) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  Image: MDImage,
  Video: MDVideo,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      {/* @ts-ignore */}
      <Component components={components} />
    </div>
  )
}
