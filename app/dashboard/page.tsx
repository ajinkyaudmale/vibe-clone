"use client"

import { useState } from "react"
import XpTracker from "@/components/xp-tracker"
import StreakCalendar from "@/components/streak-calendar"
import AchievementShowcase from "@/components/achievement-showcase"
import SocialFeed from "@/components/social-feed"

export default function DashboardPage() {
  const [currentXp, setCurrentXp] = useState(150)
  const [targetXp, setTargetXp] = useState(200)
  const [streakDays, setStreakDays] = useState(5)
  const [lastActiveDate, setLastActiveDate] = useState(new Date())

  const achievements = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "trophy" as const,
      progress: 1,
      total: 1,
      unlocked: true,
    },
    {
      id: "2",
      title: "Week Warrior",
      description: "Maintain a 7-day streak",
      icon: "star" as const,
      progress: 5,
      total: 7,
      unlocked: false,
    },
    {
      id: "3",
      title: "Vocabulary Master",
      description: "Learn 100 new words",
      icon: "award" as const,
      progress: 75,
      total: 100,
      unlocked: false,
    },
    {
      id: "4",
      title: "Speed Learner",
      description: "Complete 5 lessons in one day",
      icon: "zap" as const,
      progress: 3,
      total: 5,
      unlocked: false,
    },
  ]

  const socialPosts = [
    {
      id: "1",
      user: {
        name: "Alex Johnson",
        avatar: "https://i.pravatar.cc/150?img=1",
        streak: 12,
      },
      content: "Just completed the Advanced Grammar lesson! 🎉",
      type: "lesson" as const,
      timestamp: new Date(),
      likes: 8,
      comments: 3,
    },
    {
      id: "2",
      user: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?img=2",
        streak: 30,
      },
      content: "Reached a 30-day streak! Can't believe I've come this far! 💪",
      type: "streak" as const,
      timestamp: new Date(Date.now() - 3600000),
      likes: 15,
      comments: 5,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <XpTracker current={currentXp} target={targetXp} />
          <StreakCalendar streakDays={streakDays} lastActiveDate={lastActiveDate} />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <AchievementShowcase achievements={achievements} />
          <SocialFeed posts={socialPosts} />
        </div>
      </div>
    </div>
  )
} 