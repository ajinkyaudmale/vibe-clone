"use client"

import { useState } from "react"
import { Mic, MicOff, CheckCircle2, XCircle } from "lucide-react"

export default function SpeechPractice() {
  const [isRecording, setIsRecording] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [currentPhrase, setCurrentPhrase] = useState("Hola, ¿cómo estás?")
  const [translation, setTranslation] = useState("Hello, how are you?")

  const handleStartRecording = () => {
    setIsRecording(true)
    // Here you would implement actual speech recognition
    // For now, we'll simulate it
    setTimeout(() => {
      setIsRecording(false)
      setIsCorrect(Math.random() > 0.5)
    }, 2000)
  }

  const handleNextPhrase = () => {
    setIsCorrect(null)
    // In a real app, you would fetch the next phrase from your data
    setCurrentPhrase("Me llamo Juan")
    setTranslation("My name is Juan")
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Practice Speaking</h2>
        <div className="space-y-4">
          <div className="text-2xl font-medium text-gray-900">
            {currentPhrase}
          </div>
          <div className="text-gray-600">{translation}</div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleStartRecording}
          disabled={isRecording}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
            isRecording
              ? "bg-red-500 text-white"
              : "bg-[#58cc02] text-white hover:bg-[#4bb302]"
          }`}
        >
          {isRecording ? (
            <MicOff className="w-8 h-8" />
          ) : (
            <Mic className="w-8 h-8" />
          )}
        </button>

        {isCorrect !== null && (
          <div className="flex items-center space-x-2">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-6 h-6 text-[#58cc02]" />
                <span className="text-[#58cc02] font-medium">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500" />
                <span className="text-red-500 font-medium">Try again</span>
              </>
            )}
          </div>
        )}

        <button
          onClick={handleNextPhrase}
          className="mt-4 px-4 py-2 bg-[#58cc02] text-white rounded-lg hover:bg-[#4bb302] transition-colors"
        >
          Next Phrase
        </button>
      </div>
    </div>
  )
}
