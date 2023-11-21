"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "~/lib/utils"
import { useMounted } from "~/hooks/use-mounted"

import VideoPlayerControls from "../video-player-controls"

type Props = {} & ComponentPropsWithoutRef<"video">

export default function MDVideo({ src, className, ...props }: Props) {
  const [videoProgress, setVideoProgress] = useState<number>(0)
  const [videoDuration, setVideoDuration] = useState<number>()
  const [isPaused, setIsPaused] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const mounted = useMounted()

  const togglePlayPause = () => {
    const video = videoRef.current
    if (video) {
      setIsPaused(!video.paused)
      video.paused ? video.play() : video.pause()
    }
  }

  useEffect(() => {
    if (isPaused) return
    const currentTime = videoRef.current?.currentTime

    if (videoDuration != null && currentTime != null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.000001)
        } else {
          setVideoProgress(currentTime / videoDuration)
        }
      }, 10)

      return () => {
        clearTimeout(loadingTimeout)
      }
    }
  }, [videoProgress, videoDuration, isPaused])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 m-3 z-10">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          onPlayPause={togglePlayPause}
          size={40}
        />
      </div>
      <video
        ref={videoRef}
        className={cn("w-full h-auto rounded-xl border my-3", className)}
        loop
        autoPlay
        muted
        onLoadedMetadata={() => setVideoDuration(videoRef.current?.duration)}
        {...props}
      >
        <source src={src} />
      </video>
    </div>
  )
}
