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
        className="flex items-center text-sm px-4 py-4 rounded-lg relative"
      >
        {isHovered && (
          <motion.div
            className="inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg absolute -z-10"
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
          className="ml-2 text-stone-500 dark:text-neutral-400 font-normal"
          text={project.description}
          speed={5}
          changes={5}
        />
        <div className="flex-1 relative mx-2">
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
            className="absolute inset-x-0 bg-neutral-300 dark:bg-neutral-800 h-px"
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
            className="absolute inset-x-0 bg-neutral-800 dark:bg-neutral-500 h-px"
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
