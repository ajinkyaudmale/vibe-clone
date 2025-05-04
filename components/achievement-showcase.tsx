"use client"

import { Trophy, Star, Award, Zap } from "lucide-react"
import { motion } from "framer-motion"

interface Achievement {
  id: string
  title: string
  description: string
  icon: "trophy" | "star" | "award" | "zap"
  progress: number
  total: number
  unlocked: boolean
}

interface AchievementShowcaseProps {
  achievements: Achievement[]
}

const iconMap = {
  trophy: Trophy,
  star: Star,
  award: Award,
  zap: Zap,
}

export default function AchievementShowcase({ achievements }: AchievementShowcaseProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Achievements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement) => {
          const Icon = iconMap[achievement.icon]
          
          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg border ${
                achievement.unlocked
                  ? "border-[#58cc02] bg-[#58cc02]/5"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`p-2 rounded-full ${
                    achievement.unlocked
                      ? "bg-[#58cc02] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {achievement.description}
                  </p>
                  
                  {!achievement.unlocked && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#58cc02] h-2 rounded-full transition-all duration-300"
                          style={{
                            width: `${(achievement.progress / achievement.total) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {achievement.progress} of {achievement.total} completed
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
} 