# LinguaLearn - Duolingo Clone

A modern language learning web application built with Next.js and Tailwind CSS, featuring advanced AI-powered features and interactive learning tools.

## 🚀 Features

### Core Features

- 📱 Responsive dashboard with modern UI
- 📊 XP and streak tracking
- 📚 Interactive lesson grid
- 🏆 Leaderboard system
- 👤 User profile management

### Advanced Features

- 🎤 Speech Recognition Practice
- 🤖 GPT-powered Learning Assistant
- 📈 Daily XP Goal Visualizer
- 🌍 Culture Explorer
- 🎧 Listening Quiz
- 🔤 AI-Powered Lesson Generator

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Lucide Icons
- **Animations**: Framer Motion
- **AI Integration**: OpenAI API
- **Speech Recognition**: Web Speech API
- **State Management**: React Hooks

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/lingualearn.git
cd lingualearn
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file and add your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Project Structure

```
lingualearn/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard page
│   ├── lessons/          # Lessons page
│   ├── leaderboard/      # Leaderboard page
│   └── profile/          # Profile page
├── components/            # Reusable components
│   ├── xp-tracker.tsx    # XP progress visualization
│   ├── streak-calendar.tsx # Streak tracking
│   ├── achievement-showcase.tsx # Achievements display
│   └── social-feed.tsx   # Social activity feed
├── public/               # Static assets
└── styles/              # Global styles
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
