"use client"

import { Heart, MessageCircle, Share2, Trophy } from "lucide-react"
import { motion } from "framer-motion"

interface SocialPost {
  id: string
  user: {
    name: string
    avatar: string
    streak: number
  }
  content: string
  type: "achievement" | "streak" | "lesson"
  timestamp: Date
  likes: number
  comments: number
}

interface SocialFeedProps {
  posts: SocialPost[]
}

export default function SocialFeed({ posts }: SocialFeedProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Social Feed</h3>
      
      <div className="space-y-4">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{post.user.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Trophy className="w-4 h-4 text-[#58cc02]" />
                      <span>{post.user.streak} day streak</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(post.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                
                <p className="mt-2 text-gray-700">{post.content}</p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-[#58cc02] transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-[#58cc02] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-[#58cc02] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 