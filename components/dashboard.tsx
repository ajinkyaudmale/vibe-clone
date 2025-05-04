"use client"

import { useState, useEffect } from "react"
import { Home, BookOpen, Mic, MessageSquare, Globe, Trophy, User as UserIcon, Flame, ChevronDown, Heart, Gem } from "lucide-react"
import { useLocalStorage } from "@/hooks/use-local-storage"
import type { User, Lesson, XpGoal } from "@/lib/types"
import { initialUser, initialLessons } from "@/lib/data"
import LessonGrid from "./lesson-grid"
import XpTracker from "./xp-tracker"
import SpeechPractice from "./speech-practice"
import ChatAssistant from "./chat-assistant"
import CultureTab from "./culture-tab"
import Leaderboard from "./leaderboard"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [user, setUser] = useLocalStorage<User>("user", initialUser)
  const [lessons, setLessons] = useLocalStorage<Lesson[]>("lessons", initialLessons)
  const [xpGoal, setXpGoal] = useLocalStorage<XpGoal>("xpGoal", {
    current: 0,
    target: 50,
  })

  const navItems = [
    { id: "home", label: "Learn", icon: Home },
    { id: "lessons", label: "Lessons", icon: BookOpen },
    { id: "speech", label: "Practice", icon: Mic },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "culture", label: "Culture", icon: Globe },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "profile", label: "Profile", icon: UserIcon },
  ]

  const handleTabClick = (e: React.MouseEvent, tabId: string) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveTab(tabId)
    // Update URL without page reload
    window.history.pushState({}, '', `/${tabId}`)
  }

  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname.slice(1) || "home"
      setActiveTab(path)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const completeLesson = (lessonId: string, xpGained: number) => {
    setLessons(lessons.map((lesson) => (lesson.id === lessonId ? { ...lesson, completed: true } : lesson)))
    setUser({
      ...user,
      xp: user.xp + xpGained,
      streak: user.streak + 1,
      gems: user.gems + 5,
    })
    setXpGoal({
      ...xpGoal,
      current: Math.min(xpGoal.current + xpGained, xpGoal.target),
    })
  }

  const checkDate = () => {
    const lastDate = localStorage.getItem("lastDate")
    const today = new Date().toDateString()

    if (lastDate !== today) {
      localStorage.setItem("lastDate", today)
      setXpGoal((prev) => ({ ...prev, current: 0 }))
      setUser((prev) => ({ ...prev, hearts: 5 }))
    }
  }

  useEffect(() => {
    checkDate()
    const interval = setInterval(checkDate, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left side - Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#58cc02] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="ml-2 text-xl font-bold text-[#58cc02]">LinguaLearn</span>
            </div>

            {/* Center - Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleTabClick(e, item.id)}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg transition-all duration-200
                      ${isActive ? 'text-[#58cc02] bg-[#e5f6e9]' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Right side - User Stats */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center text-[#ff9600]">
                  <Flame className="w-5 h-5" />
                  <span className="ml-1 font-medium">{user.streak}</span>
                </div>
                <div className="flex items-center text-[#58cc02]">
                  <Trophy className="w-5 h-5" />
                  <span className="ml-1 font-medium">{user.xp}</span>
                </div>
                <div className="flex items-center text-[#ff4b4b]">
                  <Heart className="w-5 h-5" />
                  <span className="ml-1 font-medium">{user.hearts}</span>
                </div>
                <div className="flex items-center text-[#ffd700]">
                  <Gem className="w-5 h-5" />
                  <span className="ml-1 font-medium">{user.gems}</span>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t border-gray-100">
            <div className="flex overflow-x-auto px-4 py-2 space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={(e) => handleTabClick(e, item.id)}
                    className={`flex flex-col items-center p-2 rounded-lg transition-all duration-200
                      ${isActive ? 'text-[#58cc02]' : 'text-gray-500'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs mt-1">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {activeTab === "home" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}! 👋</h1>
                  <p className="text-gray-600 mt-1">Continue your language learning journey.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-[#ff9600]">
                    <span className="text-sm font-medium">{user.streak} day streak</span>
                  </div>
                  <div className="flex items-center text-[#58cc02]">
                    <span className="text-sm font-medium">{user.xp} XP</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Daily Goal</h2>
              <XpTracker current={xpGoal.current} target={xpGoal.target} />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Continue Learning</h2>
              <LessonGrid lessons={lessons} onComplete={completeLesson} />
            </div>
          </div>
        )}

        {activeTab === "speech" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Practice Speaking</h2>
            <SpeechPractice />
          </div>
        )}

        {activeTab === "chat" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Chat with AI Assistant</h2>
            <ChatAssistant />
          </div>
        )}

        {activeTab === "culture" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cultural Insights</h2>
            <CultureTab />
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Leaderboard</h2>
            <Leaderboard />
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-[#58cc02] rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white font-bold">{user.name[0].toUpperCase()}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600">Learning since {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total XP</span>
                    <span className="text-[#58cc02] font-bold">{user.xp} XP</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Streak</span>
                    <span className="text-[#ff9600] font-bold">{user.streak} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lessons Completed</span>
                    <span className="text-gray-900 font-bold">
                      {lessons.filter(lesson => lesson.completed).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Level</span>
                    <span className="text-gray-900 font-bold">Level {user.level}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Goal</h3>
                <XpTracker current={xpGoal.current} target={xpGoal.target} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 