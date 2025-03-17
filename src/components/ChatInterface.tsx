
import React, { useState, useRef, useEffect } from 'react';
import { Send, Search, Info, User, Bot, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isVerified?: boolean;
  sources?: Array<{ title: string; url: string }>;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Aproko Health AI. How can I help you with your health questions today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string): Promise<Message> => {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        let response = '';
        let sources = [];
        let isVerified = false;

        // Simple keyword-based responses for demo
        if (query.toLowerCase().includes('headache')) {
          response = "Headaches can be caused by various factors including stress, dehydration, lack of sleep, or underlying health conditions. For occasional headaches, rest, staying hydrated, and over-the-counter pain relievers may help. If you're experiencing severe, frequent, or unusual headaches, it's important to consult with a healthcare provider.";
          sources = [
            { title: 'Mayo Clinic - Headache', url: 'https://www.mayoclinic.org/symptoms/headache/basics/definition/sym-20050800' },
            { title: 'NHS - Headaches', url: 'https://www.nhs.uk/conditions/headaches/' }
          ];
          isVerified = true;
        } else if (query.toLowerCase().includes('sleep') || query.toLowerCase().includes('insomnia')) {
          response = "Healthy sleep habits include maintaining a regular sleep schedule, creating a restful environment, limiting daytime naps, and avoiding caffeine and electronics before bedtime. Most adults need 7-9 hours of sleep per night. Persistent sleep problems may require medical attention.";
          sources = [
            { title: 'CDC - Sleep and Sleep Disorders', url: 'https://www.cdc.gov/sleep/index.html' },
            { title: 'Sleep Foundation', url: 'https://www.sleepfoundation.org/' }
          ];
          isVerified = true;
        } else if (query.toLowerCase().includes('diet') || query.toLowerCase().includes('nutrition')) {
          response = "A balanced diet typically includes a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Portion control and mindful eating are also important. Individual nutritional needs can vary based on age, sex, health status, and activity level.";
          sources = [
            { title: 'WHO - Healthy Diet', url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet' },
            { title: 'Harvard Health - Healthy Eating Plate', url: 'https://www.health.harvard.edu/staying-healthy/healthy-eating-plate' }
          ];
          isVerified = true;
        } else {
          response = "Thank you for your question. While I strive to provide accurate health information, I recommend consulting with a healthcare professional for personalized advice. Would you like me to provide some general information about this topic or redirect you to reliable health resources?";
        }

        resolve({
          id: Date.now().toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date(),
          isVerified,
          sources,
        });
      }, 1500);
    });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    try {
      const botResponse = await generateResponse(input);
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "I'm sorry, I couldn't process your request. Please try again.",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] bg-white border border-gray-200 rounded-aproko shadow-card overflow-hidden">
      {/* Chat header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary" />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold">Aproko Health AI</h3>
            <div className="flex items-center text-xs text-text-muted">
              <span className="w-2 h-2 bg-success rounded-full"></span>
              <span className="ml-2">AI Assistant</span>
            </div>
          </div>
          <div className="ml-auto">
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
              aria-label="Information"
            >
              <Info className="h-5 w-5 text-text-muted" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-aproko p-3 ${
                message.sender === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100'
              } animate-scale`}
            >
              {message.sender === 'bot' && (
                <div className="flex items-center mb-1">
                  <Bot className="h-4 w-4 mr-1 text-primary" />
                  <span className="text-xs font-medium">Aproko AI</span>
                  {message.isVerified && (
                    <div className="ml-2 flex items-center text-success text-xs">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              )}
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              {message.sources && message.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-xs font-medium mb-1">Sources:</p>
                  <ul className="space-y-1">
                    {message.sources.map((source, index) => (
                      <li key={index} className="text-xs">
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {source.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="text-right mt-1">
                <span className="text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-aproko p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your health question..."
            className="flex-1 py-2 px-4 rounded-aproko border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isTyping}
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() || isTyping}
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
        <div className="mt-2 text-center">
          <p className="text-xs text-text-muted">
            Aproko Health AI provides general health information. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
