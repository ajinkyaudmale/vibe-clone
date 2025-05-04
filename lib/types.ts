export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  xp: number
  streak: number
  language: string
  level: number
  gems: number
  hearts: number
  dailyGoal: number
  lastActive: string
}

export interface Lesson {
  id: string
  title: string
  description: string
  unit: number
  level: number
  xpReward: number
  progress: number
  completed: boolean
  locked: boolean
  type: 'vocabulary' | 'grammar' | 'listening' | 'speaking'
  questions: Question[]
}

export interface Question {
  id: string
  type: 'multiple-choice' | 'translation' | 'speaking' | 'listening'
  question: string
  options?: string[]
  correctAnswer: string
  audioUrl?: string
  imageUrl?: string
}

export interface XpGoal {
  current: number
  target: number
}

export interface LeaderboardEntry {
  id: string
  name: string
  avatar?: string
  xp: number
  streak: number
  rank: number
  language: string
}

export interface ChatMessage {
  id: string
  type: "user" | "bot" | "text" | "image" | "audio"
  content: string
  timestamp: string
}

export interface CultureArticle {
  id: string
  title: string
  content: string
  imageUrl: string
  language: string
  category: "food" | "traditions" | "history" | "daily-life"
  difficulty: "beginner" | "intermediate" | "advanced"
  readTime: number
}
