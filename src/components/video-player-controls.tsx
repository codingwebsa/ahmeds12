// @ts-ignore
import { Pause, Play } from "@phosphor-icons/react/dist/ssr"

interface VideoPlayerControlsProps {
  progress: number
  size?: number | undefined
  width?: number | undefined
  isPaused: boolean
  onPlayPause: () => void
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  size = 48,
  width = 2,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2
  const radius = center - width
  const dashArray = 2 * Math.PI * radius
  const dashOffset = dashArray * (1 - progress)

  return (
    <div className="relative flex items-center justify-center rounded-full">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#9191914d"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#ffffff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button
          className="group flex cursor-pointer items-center justify-center"
          onClick={onPlayPause}
        >
          <div className="fill-white transition-colors duration-200 ease-in-out group-hover:fill-[#aaaaaa]">
            {isPaused ? (
              <Play className="h-4 w-4 text-white" weight="fill" />
            ) : (
              <Pause className="h-4 w-4 text-white" weight="fill" />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls
