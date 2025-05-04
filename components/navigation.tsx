"use client"

import { Home, Mic, MessageSquare, Globe, Trophy, User, Flame, ChevronDown } from "lucide-react"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  userXp: number
  streak: number
}

export default function Navigation({ activeTab, setActiveTab, userXp, streak }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Learn", icon: Home },
    { id: "speech", label: "Practice", icon: Mic },
    { id: "chat", label: "Chat", icon: MessageSquare },
    { id: "culture", label: "Culture", icon: Globe },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "profile", label: "Profile", icon: User },
  ]

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
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
                  onClick={() => setActiveTab(item.id)}
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
                <span className="ml-1 font-medium">{streak}</span>
              </div>
              <div className="flex items-center text-[#58cc02]">
                <Trophy className="w-5 h-5" />
                <span className="ml-1 font-medium">{userXp}</span>
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
                  onClick={() => setActiveTab(item.id)}
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
    </div>
  )
} 