"use client"

import { useState } from "react"
import { Send, Bot, User } from "lucide-react"
import type { ChatMessage } from "@/lib/types"

export default function ChatAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "¡Hola! ¿Cómo puedo ayudarte hoy?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "¡Gracias por tu mensaje! ¿Hay algo más en lo que pueda ayudarte?",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Chat Assistant</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.type === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === "user"
                    ? "bg-[#58cc02] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {message.type === "user" ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Bot className="w-5 h-5" />
                )}
              </div>
              <div
                className={`p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-[#58cc02] text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#58cc02]"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-[#58cc02] text-white rounded-lg hover:bg-[#4bb302] transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
