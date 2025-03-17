
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatInterface from '../components/ChatInterface';
import { MessageCircle, CheckCircle, AlertCircle, Lock } from 'lucide-react';

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
              AI Health Assistant
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Chat with Aproko AI Health Assistant
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Get instant, accurate answers to your health questions, verified by medical professionals. 
              No more medical misinformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 animate-fade-in">
              <ChatInterface />
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <div className="card-base animate-fade-in animate-delay-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Verified Information</h3>
                    <p className="text-text-muted text-sm">
                      All responses are fact-checked and backed by credible medical sources. Look for the "Verified" badge.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-base animate-fade-in animate-delay-300">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Topic Suggestions</h3>
                    <p className="text-text-muted text-sm mb-3">
                      Not sure what to ask? Try these popular topics:
                    </p>
                    <div className="space-y-2">
                      <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 text-sm hover:bg-gray-200 transition-colors">
                        Common cold vs. flu symptoms
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 text-sm hover:bg-gray-200 transition-colors">
                        Foods that help reduce inflammation
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 text-sm hover:bg-gray-200 transition-colors">
                        How to improve sleep quality
                      </button>
                      <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 text-sm hover:bg-gray-200 transition-colors">
                        Understanding blood pressure readings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-base animate-fade-in animate-delay-400">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Important Note</h3>
                    <p className="text-text-muted text-sm">
                      Aproko Health AI provides general health information and is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card-base animate-fade-in animate-delay-500">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-info-foreground/10 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Privacy Focused</h3>
                    <p className="text-text-muted text-sm">
                      Your conversations are private and secure. We don't store personal health information without your explicit consent.
                    </p>
                    <a href="/privacy" className="text-primary text-sm font-medium mt-2 inline-block hover:underline">
                      Read our privacy policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
