"use client"

import { Trophy, Crown, Medal } from "lucide-react"
import { leaderboardData } from "@/lib/data"

export default function Leaderboard() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        {leaderboardData.map((entry, index) => (
          <div
            key={entry.id}
            className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                {index === 0 ? (
                  <Crown className="w-6 h-6 text-yellow-500" />
                ) : index === 1 ? (
                  <Medal className="w-6 h-6 text-gray-400" />
                ) : index === 2 ? (
                  <Medal className="w-6 h-6 text-amber-600" />
                ) : (
                  <span className="text-gray-500 font-medium">{index + 1}</span>
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{entry.name}</h3>
                <p className="text-sm text-gray-500">{entry.language}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-[#ff9600]">
                <Trophy className="w-5 h-5" />
                <span className="ml-1 font-medium">{entry.xp} XP</span>
              </div>
              <div className="flex items-center text-[#ff9600]">
                <span className="text-sm font-medium">{entry.streak} day streak</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 