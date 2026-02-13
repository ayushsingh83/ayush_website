const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export interface ChatbotResponse {
  text: string;
  suggestions?: string[];
}

export const chatbotApi = {
  sendMessage: async (message: string): Promise<ChatbotResponse> => {
    const response = await fetch(`${API_BASE_URL}/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error('Failed to get chatbot response');
    }

    return response.json();
  }
};
