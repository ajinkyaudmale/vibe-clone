import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinguaLearn - Language Learning App",
  description: "A Duolingo-style language learning web application",
  generator: 'AjinkyA'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <nav className="w-64 bg-white shadow-lg p-4">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-green-600">DuoClone</h1>
              </div>
              <ul className="space-y-2">
                {['Home', 'Lessons', 'Leaderboard', 'Profile'].map((item) => (
                  <li key={item}>
                    <a href={`/${item.toLowerCase()}`} className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="ml-3">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
