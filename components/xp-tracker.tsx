"use client"

import { useEffect, useState } from "react"
import { Trophy } from "lucide-react"
import confetti from "canvas-confetti"

interface XpTrackerProps {
  current: number
  target: number
}

export default function XpTracker({ current, target }: XpTrackerProps) {
  const [prevProgress, setPrevProgress] = useState(0)
  const percentage = Math.min((current / target) * 100, 100)

  useEffect(() => {
    if (percentage === 100 && prevProgress < 100) {
      // Trigger confetti when goal is reached
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }
    setPrevProgress(percentage)
  }, [percentage, prevProgress])

  return (
    <div className="space-y-4">
      {/* Circular Progress */}
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-gray-100"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className="text-[#58cc02] transition-all duration-500 ease-out"
            strokeWidth="8"
            strokeDasharray={`${percentage * 2.51} 251`}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
          {/* Center content */}
          <foreignObject x="25" y="25" width="50" height="50">
            <div className="flex flex-col items-center justify-center h-full">
              <Trophy className="w-6 h-6 text-[#58cc02]" />
              <span className="text-sm font-medium text-gray-600">
                {Math.round(percentage)}%
              </span>
            </div>
          </foreignObject>
        </svg>
      </div>

      {/* Linear Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-gray-100 rounded-full h-4">
          <div
            className="bg-[#58cc02] h-4 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{current} XP</span>
          <span>{target} XP</span>
        </div>
      </div>
    </div>
  )
}
