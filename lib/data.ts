import type { User, Lesson, Question, LeaderboardEntry, CultureArticle } from './types'

export const initialUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  xp: 0,
  streak: 0,
  language: 'Spanish',
  level: 1,
  gems: 0,
  hearts: 5,
  dailyGoal: 50,
  lastActive: new Date().toISOString(),
}

export const initialLessons: Lesson[] = [
  {
    id: '1',
    title: 'Basic Greetings',
    description: 'Learn how to greet people in Spanish',
    unit: 1,
    level: 1,
    xpReward: 10,
    progress: 0,
    completed: false,
    locked: false,
    type: 'vocabulary',
    questions: [
      {
        id: '1',
        type: 'multiple-choice',
        question: 'How do you say "Hello" in Spanish?',
        options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
        correctAnswer: 'Hola',
      },
      {
        id: '2',
        type: 'translation',
        question: 'Translate "Good morning" to Spanish',
        correctAnswer: 'Buenos días',
      },
    ],
  },
  {
    id: '2',
    title: 'Numbers 1-10',
    description: 'Learn to count from 1 to 10 in Spanish',
    unit: 1,
    level: 1,
    xpReward: 10,
    progress: 0,
    completed: false,
    locked: true,
    type: 'vocabulary',
    questions: [
      {
        id: '3',
        type: 'multiple-choice',
        question: 'What is "one" in Spanish?',
        options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
        correctAnswer: 'Uno',
      },
    ],
  },
]

export const leaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    name: 'Sarah Smith',
    xp: 2500,
    streak: 15,
    rank: 1,
    language: 'Spanish',
  },
  {
    id: '2',
    name: 'Mike Johnson',
    xp: 2000,
    streak: 10,
    rank: 2,
    language: 'Spanish',
  },
  {
    id: '3',
    name: 'Emma Davis',
    xp: 1800,
    streak: 8,
    rank: 3,
    language: 'Spanish',
  },
]

export const cultureArticles: CultureArticle[] = [
  {
    id: '1',
    title: 'Spanish Tapas Culture',
    content: 'Tapas are a wide variety of appetizers or snacks in Spanish cuisine...',
    imageUrl: '/images/tapas.jpg',
    language: 'Spanish',
    category: 'food',
    difficulty: 'beginner',
  },
  {
    id: '2',
    title: 'The Running of the Bulls',
    content: 'The Running of the Bulls is a traditional event that involves running in front of a small group of bulls...',
    imageUrl: '/images/running-bulls.jpg',
    language: 'Spanish',
    category: 'traditions',
    difficulty: 'intermediate',
  },
]
