"use client"

import React, { useRef, useState } from "react"
import Link from "next/link"
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { useTheme } from "next-themes"

import { personalConfig } from "~/config/personal"
import { cn } from "~/lib/utils"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

export default function Dock() {
  let mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e: any) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-14 items-end gap-2 rounded-full border border-[hsl(0_0%_0%/0.077)] bg-[hsl(0,0%,95%)] px-2 pb-1.5 dark:border-[hsl(0_0%_100%/0.077)] dark:bg-[hsl(0,0%,8.5%)]"
    >
      <TooltipProvider delayDuration={0}>
        <HomeIcon mouseX={mouseX} />
        <CraftIcon mouseX={mouseX} />
        <ProjectsIcon mouseX={mouseX} />
        <PhotosIcon mouseX={mouseX} />
        <hr className="h-9 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent dark:via-white/20" />
        <TwitterIcon mouseX={mouseX} />
        <EmailIcon mouseX={mouseX} />
        <hr className="h-9 w-px bg-gradient-to-b from-transparent via-black/20 to-transparent dark:via-white/20" />
        <ToggleTheme mouseX={mouseX} />
      </TooltipProvider>
    </motion.div>
  )
}

function HomeIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Home</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href="/"
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function CraftIcon({ mouseX }: { mouseX: MotionValue }) {
  const [isBouncing, setIsBouncing] = useState(false)
  let ref = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Craft</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href="/craft"
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.25"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.49998 3.50004C7.29283 1.70719 10.1189 1.5772 12.0615 3.11008C12.3818 3.36283 12.6631 3.66091 12.9502 3.95004L21.6787 12.6786C21.9424 12.9423 22.0192 13.2934 21.9465 13.6089C21.8635 13.9692 21.5853 14.2829 21.1677 14.3664L18.2968 14.9406C18.1032 14.9793 17.9254 15.0745 17.7858 15.2141L11.4142 21.5858C10.6331 22.3668 9.36678 22.3668 8.58573 21.5858L2.41416 15.4142C1.63311 14.6332 1.63311 13.3668 2.41416 12.5858C3.2879 11.712 4.16159 10.8382 5.03534 9.96448C3.5819 8.02573 3.73678 5.26324 5.49998 3.50004ZM6.47443 8.52539L10.5253 4.47449C9.39087 3.7881 7.89376 3.93469 6.9142 4.91425C5.93463 5.89382 5.78804 7.39093 6.47443 8.52539Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.7928 17C15.2383 17 15.4614 17.5386 15.1464 17.8536L11.4142 21.5858C10.6331 22.3668 9.36679 22.3668 8.58574 21.5858L4.8535 17.8536C4.53852 17.5386 4.7616 17 5.20706 17H14.7928Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M22 20.0001C22 21.1047 21.1046 22.0001 20 22.0001C18.8954 22.0001 18 21.1047 18 20.0001C18 18.8592 19.1571 17.7183 19.711 17.2374C19.8788 17.0918 20.1212 17.0918 20.289 17.2374C20.8429 17.7183 22 18.8592 22 20.0001Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function ProjectsIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Projects</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href="/projects"
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z"
                  fill="currentColor"
                ></path>
                <path
                  opacity="0.25"
                  d="M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function PhotosIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Photos</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href="/photos"
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M2 8.34233C2 6.96573 2.93689 5.76578 4.27239 5.4319L6 5L7.1094 3.3359C7.6658 2.5013 8.60249 2 9.60555 2H14.3944C15.3975 2 16.3342 2.5013 16.8906 3.3359L18 5L19.7276 5.4319C21.0631 5.76578 22 6.96573 22 8.34233V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V8.34233Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function TwitterIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Twitter</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href={personalConfig.socialLinks.twitter}
            target="_blank"
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function EmailIcon({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Email</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <Link
            href={`mailto:${personalConfig.email}`}
            className="relative grid h-full w-full place-content-center"
          >
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z"
                  fill="currentColor"
                ></path>
              </motion.svg>
            </div>
          </Link>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
function ToggleTheme({ mouseX }: { mouseX: MotionValue }) {
  let ref = useRef<HTMLDivElement>(null)
  const [isBouncing, setIsBouncing] = useState(false)
  const { setTheme, theme } = useTheme()

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let widthIconSync = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 100, damping: 12 })
  let widthIcon = useSpring(widthIconSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  function handleClick() {
    if (theme == "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
    setIsBouncing(true)
    setTimeout(() => setIsBouncing(false), 500)
  }

  return (
    <Tooltip>
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn(
          "aspect-square w-10 rounded-full bg-gradient-to-tr from-[hsl(0,0%,80%)] via-[hsl(0,0%,90%)] to-[hsl(0,0%,90%)] text-[hsl(0,0%,9.4%)] [background-size:200%_100%;] dark:from-[hsl(0,0%,11%)] dark:via-[hsl(0,0%,13.6%)] dark:to-[hsl(0,0%,13.6%)] dark:text-[hsl(0,0%,49.4%)]",
          isBouncing && "animate-bounce-icon"
        )}
        onClick={handleClick}
      >
        <TooltipContent>
          <p>Toggle theme</p>
        </TooltipContent>
        <TooltipTrigger asChild>
          <button className="relative grid h-full w-full place-content-center">
            <div className="relative">
              <div className="bg-[linear-gradient(90deg,rgba(0, 0, 0, 0),hsl(0,0%,15.8) 20%,hsl(0,0%,24.3)_67.19%,rgba(0, 0, 0, 0))] h-hull -top-px w-full rounded-full opacity-80" />
              <motion.svg
                aria-hidden="true"
                width={widthIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                {theme == "light" ? (
                  <>
                    <path
                      fill="currentColor"
                      d="M12.477 4.546A1.01 1.01 0 0 1 13.5 3.127c.025.002.049.006.074.01 6.821 1.213 9.771 9.356 5.31 14.656-4.462 5.301-12.988 3.784-15.348-2.73a9.012 9.012 0 0 1-.399-1.489 1.01 1.01 0 0 1 1.339-1.125c.024.008.047.018.07.028 4.214 1.892 8.895-1.488 8.426-6.083a5.998 5.998 0 0 0-.495-1.848Z"
                      opacity=".3"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M8.397 2.857c.04-.09.166-.09.206 0l.102.222a5.191 5.191 0 0 0 1.97 2.172l.157.092c.073.04.075.144.003.187l-.003.002-.158.092a5.193 5.193 0 0 0-2.07 2.394.113.113 0 0 1-.195.022c-.004-.007-.009-.014-.012-.022l-.102-.222a5.191 5.191 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1-.003-.187l.003-.002.158-.092a5.191 5.191 0 0 0 1.97-2.172l.102-.222ZM5.565 7.716l.064.14a3.257 3.257 0 0 0 1.237 1.363l.1.059a.068.068 0 0 1 0 .118l-.1.058a3.26 3.26 0 0 0-1.237 1.364l-.064.14a.07.07 0 0 1-.122.013.057.057 0 0 1-.008-.013l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.059c.534-.326.964-.8 1.236-1.364l.064-.14a.07.07 0 0 1 .122-.013.057.057 0 0 1 .008.013l.001.001Z"
                    ></path>
                  </>
                ) : (
                  <>
                    <path
                      fill="currentColor"
                      d="M12 18.5a1.5 1.5 0 0 1 1.493 1.356L13.5 20v1a1.5 1.5 0 0 1-2.993.144L10.5 21v-1a1.5 1.5 0 0 1 1.5-1.5Zm0-17a1.5 1.5 0 0 1 1.493 1.356L13.5 3v1a1.5 1.5 0 0 1-2.993.144L10.5 4V3A1.5 1.5 0 0 1 12 1.5Zm5.303 3.075a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm-12.728 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122ZM21 10.5a1.5 1.5 0 0 1 .144 2.993L21 13.5h-1a1.5 1.5 0 0 1-.144-2.993L20 10.5h1Zm-17 0a1.5 1.5 0 0 1 .144 2.993L4 13.5H3a1.5 1.5 0 0 1-.144-2.993L3 10.5h1Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M12 6c4.619 0 7.506 5 5.196 9A6 6 0 0 1 12 18c-4.619 0-7.506-5-5.196-9A6 6 0 0 1 12 6Z"
                      opacity=".3"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M5.282 16.596a1.5 1.5 0 0 1 2.225 2.008l-.103.114-.707.707a1.5 1.5 0 0 1-2.225-2.008l.103-.114.707-.707Zm11.314 0a1.5 1.5 0 0 1 2.008-.103l.114.103.707.707a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-.707-.707a1.5 1.5 0 0 1 0-2.122Z"
                    ></path>
                  </>
                )}
              </motion.svg>
            </div>
          </button>
        </TooltipTrigger>
      </motion.div>
    </Tooltip>
  )
}
