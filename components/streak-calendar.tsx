"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

interface StreakCalendarProps {
  streakDays: number
  lastActiveDate: Date
}

export default function StreakCalendar({ streakDays, lastActiveDate }: StreakCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  
  // Generate the last 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return date
  }).reverse()

  const isActiveDay = (date: Date) => {
    return date <= lastActiveDate && date >= new Date(lastActiveDate.getTime() - streakDays * 24 * 60 * 60 * 1000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Streak Calendar</h3>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-[#58cc02]" />
          <span className="text-sm font-medium">{streakDays} day streak</span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, index) => {
          const isActive = isActiveDay(date)
          const isToday = date.toDateString() === new Date().toDateString()
          
          return (
            <div
              key={index}
              className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive ? 'bg-[#58cc02]/10' : 'bg-gray-100'
              } ${isToday ? 'ring-2 ring-[#58cc02]' : ''}`}
              onClick={() => setSelectedDate(date)}
            >
              <span className="text-xs font-medium text-gray-600">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-sm font-semibold">
                {date.getDate()}
              </span>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-full bg-[#58cc02] mt-1" />
              )}
            </div>
          )
        })}
      </div>

      {selectedDate && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h4>
          <p className="text-sm text-gray-600">
            {isActiveDay(selectedDate)
              ? `You completed your daily goal!`
              : `No activity recorded for this day.`}
          </p>
        </div>
      )}
    </div>
  )
} 