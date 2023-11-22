"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
// @ts-expect-error
import HackerText from "react-hacker-text"

import { cn } from "~/lib/utils"

type Props = {
  project: Project
  index: number
}

export default function Project({ project, index }: Props) {
  const [isHovered, setIsHovered] = useState<Boolean>(false)

  return (
    <motion.div
      className={cn("py-1")}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: index == 0 ? 0 : 0.5,
        delay: index == 0 ? 0 : 0.1 * index,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={project.link}
        target="_blank"
        className="relative flex items-center rounded-lg px-4 py-4 text-sm"
      >
        {isHovered && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-lg bg-neutral-100 dark:bg-neutral-800"
            layoutId="bg-hover-div"
          />
        )}
        <HackerText
          className="text-[1rem]"
          text={project.title}
          speed={10}
          changes={5}
        />
        <HackerText
          className="ml-2 font-normal text-stone-500 dark:text-neutral-400"
          text={project.description}
          speed={5}
          changes={5}
        />
        <div className="relative mx-2 flex-1">
          <motion.span
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 0.8,
              delay: 0 + 0.1 * index,
            }}
            className={cn(
              "absolute inset-x-0 h-px bg-neutral-300 transition-colors duration-500 dark:bg-neutral-800",
              isHovered && "dark:bg-neutral-700"
            )}
          />
          <motion.span
            initial={{
              width: "0%",
              opacity: 1,
            }}
            animate={{
              width: "100%",
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.1 + 0.1 * index,
              ease: "easeOut",
            }}
            className="absolute inset-x-0 h-px bg-neutral-800 dark:bg-neutral-500"
          />
        </div>
        <HackerText
          className="text-neutral-600 dark:text-neutral-500"
          text={project.year.toString()}
          speed={15}
          changes={10}
          characters="symbols"
        />
      </Link>
    </motion.div>
  )
}
