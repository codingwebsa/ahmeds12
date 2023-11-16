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
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#404040"
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
          className="group cursor-pointer flex justify-center items-center"
          onClick={onPlayPause}
        >
          <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
            {isPaused ? (
              <Play className="w-4 h-4 text-white" weight="fill" />
            ) : (
              <Pause className="w-4 h-4 text-white" weight="fill" />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls