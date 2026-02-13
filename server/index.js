import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Mock AI chatbot responses
const getChatbotResponse = (message) => {
  const lowerMessage = message.toLowerCase();

  // Simple keyword-based responses (in production, use OpenAI/Claude API)
  if (lowerMessage.includes('event') || lowerMessage.includes('schedule')) {
    return {
      text: "I can help you schedule events! Based on current data, I recommend avoiding time slots between 2-4 PM on weekdays as they conflict with lab sessions. Would you like me to suggest optimal times for your next event?",
      suggestions: ['Schedule new event', 'Check conflicts', 'View calendar']
    };
  }

  if (lowerMessage.includes('society') || lowerMessage.includes('club')) {
    return {
      text: "I see you have 6 active societies. Code Cell and Aurora Cultural Collective have the highest engagement rates. Would you like insights on membership growth or event collaboration opportunities?",
      suggestions: ['View society stats', 'Membership trends', 'Collaboration ideas']
    };
  }

  if (lowerMessage.includes('member') || lowerMessage.includes('student')) {
    return {
      text: "Your total membership is 1,864 students across 40 societies. First-year students in hostels B & C show 23% lower engagement. I can draft targeted outreach campaigns if you'd like.",
      suggestions: ['Draft campaign', 'View engagement data', 'Member analytics']
    };
  }

  if (lowerMessage.includes('ai') || lowerMessage.includes('recommendation') || lowerMessage.includes('suggest')) {
    return {
      text: "Based on current data, here are my top recommendations:\n\n1. Shift HackFest '26 keynote 30 minutes later to avoid lab exit conflicts\n2. Co-host Aurora x Code Cell showcase for cross-society discovery\n3. Target first years in hostels B & C for Sports Week signups\n\nWould you like me to implement any of these?",
      suggestions: ['Implement recommendation', 'View all suggestions', 'Generate report']
    };
  }

  // Default response
  return {
    text: "I'm your AI assistant for CampusOS Society Management. I can help you with:\n\n• Event scheduling and conflict detection\n• Society management and analytics\n• Member engagement insights\n• AI-powered recommendations\n\nWhat would you like to know?",
    suggestions: ['Event scheduling', 'Society analytics', 'Member insights', 'AI recommendations']
  };
};

// Chatbot endpoint
app.post('/api/chatbot', (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Simulate API delay
  setTimeout(() => {
    const response = getChatbotResponse(message);
    res.json(response);
  }, 800);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
