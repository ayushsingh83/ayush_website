# College Society Management System

A premium SaaS frontend built with React + Vite + TypeScript, featuring a fully functional AI chatbot backend.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

**Option 1: Run both frontend and backend together (Recommended)**
```bash
npm run dev:all
```

**Option 2: Run separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run dev:backend
```

### Access Points

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 🎯 Features

- ✅ **Theme System**: Light/Dark mode with animated toggle
- ✅ **Glassmorphism UI**: Modern glass cards with backdrop blur
- ✅ **AI Chatbot**: Fully functional chatbot with backend API
- ✅ **Dashboard**: Analytics with Recharts (line & doughnut charts)
- ✅ **Societies Page**: 3D tilt cards with hover effects
- ✅ **Events Page**: Capacity bars and status indicators
- ✅ **AI Recommendations**: Smart suggestions panel
- ✅ **Responsive Design**: Mobile-first with bottom nav

## 🤖 Chatbot Usage

Click the floating chatbot button (bottom-right) to open the AI assistant. The chatbot can help with:

- Event scheduling and conflict detection
- Society management and analytics
- Member engagement insights
- AI-powered recommendations

Try asking:
- "Help me schedule an event"
- "Show me society statistics"
- "What are your recommendations?"

## 📁 Project Structure

```
FOLDERNEW/
├── server/
│   └── index.js          # Express backend server
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components
│   ├── layouts/          # Layout components
│   ├── context/          # React Context (Theme)
│   ├── services/         # API services
│   └── router/           # React Router setup
└── package.json
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router v6.4+
- **Backend**: Express.js, CORS

## 📝 Available Scripts

- `npm run dev` - Start frontend dev server
- `npm run dev:backend` - Start backend server
- `npm run dev:all` - Start both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Backend API

### POST `/api/chatbot`
Send a message to the AI chatbot.

**Request:**
```json
{
  "message": "Help me schedule an event"
}
```

**Response:**
```json
{
  "text": "I can help you schedule events!...",
  "suggestions": ["Schedule new event", "Check conflicts"]
}
```

### GET `/api/health`
Check backend server status.

## 🎨 Customization

- **Theme Colors**: Edit `tailwind.config.js` (neonCyan, neonPurple)
- **Backend Logic**: Modify `server/index.js` for chatbot responses
- **API Endpoints**: Add new routes in `server/index.js`

## 📦 Production Build

```bash
npm run build
```

The `dist/` folder will contain the production-ready frontend. Deploy the backend separately or integrate with your preferred hosting service.
