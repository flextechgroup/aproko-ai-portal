
import React, { useState } from 'react';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const demoMessages = [
    "Can you explain high blood pressure in simple terms?",
    "Is it true that cracking knuckles causes arthritis?",
    "How much water should I really drink daily?",
    "Does eating late at night cause weight gain?"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/chat?q=${encodeURIComponent(query)}`;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % demoMessages.length);
      simulateTyping();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const simulateTyping = () => {
    setQuery('');
    setIsTyping(true);
    
    const message = demoMessages[currentMessageIndex];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setQuery((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 75);
  };

  return (
    <div className="relative overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-light/30 to-white/0"></div>
        <div className="absolute top-40 right-10 w-32 h-32 rounded-full bg-secondary-light opacity-40 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-accent-light opacity-40 animate-float animate-delay-200"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary-light text-primary text-sm font-medium">
              AI-Powered Health Guide
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Personal <span className="text-gradient">Health Companion</span> for Accurate Answers
            </h1>
            <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Get instant, trustworthy health information from our AI, verified by medical professionals. No more medical misinformation.
            </p>
            
            <form onSubmit={handleFormSubmit} className="relative mb-8 max-w-xl mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask a health question..."
                  className="w-full py-3 pl-5 pr-12 rounded-aproko border border-gray-300 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary text-base"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
                  aria-label="Ask question"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              {isTyping && (
                <div className="absolute top-full left-0 mt-2 flex items-center text-sm text-text-muted">
                  <span className="mr-2">AI typing</span>
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse animate-delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse animate-delay-200"></span>
                  </span>
                </div>
              )}
            </form>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link to="/chat" className="btn-primary">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat with AI
              </Link>
              <Link to="/consultations" className="btn-ghost border border-gray-200">
                Talk to a Doctor
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative rounded-aproko overflow-hidden shadow-strong">
              <div className="relative glass-card p-8 rounded-aproko animate-scale">
                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary-light rounded-bl-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent-light rounded-tr-3xl opacity-70"></div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg mb-1">Aproko Health AI</h3>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-success rounded-full"></span>
                      <span className="ml-2 text-xs text-text-muted">Online now</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-aproko p-4 mb-4">
                  <p className="text-sm">Is it true that eating chocolate causes acne?</p>
                </div>
                
                <div className="bg-primary-light rounded-aproko p-4 relative mb-4">
                  <p className="text-sm">
                    There's no strong scientific evidence that chocolate directly causes acne. 
                    However, foods with high glycemic index may trigger or worsen acne in some people. 
                    Diet is just one of many factors that can influence skin health.
                  </p>
                  <div className="mt-2 text-xs text-right text-text-muted">
                    <span>Verified by medical sources</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-light transform rotate-45"></div>
                </div>
                
                <div className="text-center mt-8">
                  <Link to="/chat" className="btn-primary w-full">
                    Start Your Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
