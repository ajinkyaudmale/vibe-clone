"use client"

import { Lock, CheckCircle2 } from "lucide-react"
import type { Lesson } from "@/lib/types"

interface LessonGridProps {
  lessons: Lesson[]
  onComplete: (lessonId: string, xpGained: number) => void
}

export default function LessonGrid({ lessons, onComplete }: LessonGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
            lesson.locked ? 'opacity-50' : ''
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
              <div className="flex items-center mt-2 space-x-2">
                <span className="text-xs font-medium text-[#58cc02]">
                  {lesson.xpReward} XP
                </span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">
                  Unit {lesson.unit} • Level {lesson.level}
                </span>
              </div>
            </div>
            {lesson.locked ? (
              <Lock className="w-5 h-5 text-gray-400" />
            ) : lesson.completed ? (
              <CheckCircle2 className="w-5 h-5 text-[#58cc02]" />
            ) : null}
          </div>
          <button
            onClick={() => onComplete(lesson.id, lesson.xpReward)}
            disabled={lesson.locked}
            className={`mt-4 w-full py-2 rounded-lg transition-colors ${
              lesson.locked
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : lesson.completed
                ? 'bg-[#e5f6e9] text-[#58cc02]'
                : 'bg-[#58cc02] text-white hover:bg-[#4bb302]'
            }`}
          >
            {lesson.locked
              ? 'Locked'
              : lesson.completed
              ? 'Completed'
              : 'Start Lesson'}
          </button>
        </div>
      ))}
    </div>
  )
}
