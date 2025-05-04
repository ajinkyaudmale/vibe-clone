"use client"

import { useState } from "react"
import { BookOpen, Clock, Star } from "lucide-react"
import type { CultureArticle } from "@/lib/types"

export default function CultureTab() {
  const [selectedArticle, setSelectedArticle] = useState<CultureArticle | null>(null)

  const articles: CultureArticle[] = [
    {
      id: "1",
      title: "Spanish Tapas Culture",
      content: "Tapas are a wide variety of appetizers or snacks in Spanish cuisine. They may be cold or hot. In some bars and restaurants in Spain, tapas have evolved into an entire, sophisticated cuisine. In select bars in Spain, tapas have evolved into an entire, sophisticated cuisine. In select bars in Spain, tapas have evolved into an entire, sophisticated cuisine.",
      imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Spanish",
      category: "food",
      difficulty: "intermediate",
      readTime: 5,
    },
    {
      id: "2",
      title: "Flamenco: The Heart of Spanish Music",
      content: "Flamenco is a form of Spanish folk music and dance from the region of Andalusia in southern Spain. It includes cante (singing), toque (guitar playing), baile (dance) and palmas (handclaps). First mentioned in literature in 1774, the genre originates in Andalusian music and dance styles.",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Spanish",
      category: "traditions",
      difficulty: "advanced",
      readTime: 8,
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Culture & Traditions</h2>
      
      {selectedArticle ? (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-[#58cc02] hover:text-[#4bb302] mb-4"
          >
            ← Back to articles
          </button>
          
          <img
            src={selectedArticle.imageUrl}
            alt={selectedArticle.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          
          <h3 className="text-xl font-semibold mb-2">{selectedArticle.title}</h3>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              {selectedArticle.category}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {selectedArticle.readTime} min read
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1" />
              {selectedArticle.difficulty}
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">{selectedArticle.content}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedArticle(article)}
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {article.category}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime} min read
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 line-clamp-2">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
