
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedVideos from '../components/FeaturedVideos';
import CommunityHighlights from '../components/CommunityHighlights';
import Footer from '../components/Footer';
import { Shield, Users, Clock, Heart } from 'lucide-react';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <div 
      className="card-base flex flex-col items-center text-center animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
};

const Index = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Verified Information',
      description: 'All health information is reviewed by medical professionals for accuracy before being shared.',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Expert Community',
      description: 'Connect with licensed doctors and knowledgeable community members for support.',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Instant Responses',
      description: 'Get immediate answers to your health questions through our AI-powered chatbot.',
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Personalized Care',
      description: 'Receive health information tailored to your specific needs and concerns.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features section */}
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Combating Health Misinformation
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                AprokoHealth is committed to providing accurate, trustworthy health information through 
                AI technology and medical expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        <FeaturedVideos />
        <CommunityHighlights />
        
        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary-light">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-aproko p-8 shadow-card text-center animate-scale">
              <h2 className="text-3xl font-bold mb-4">
                Ready for Accurate Health Answers?
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto mb-8">
                Start your journey to better health understanding with AprokoHealth's AI assistant. 
                Get trustworthy information instantly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/chat" className="btn-primary w-full sm:w-auto">
                  Chat with Aproko AI
                </a>
                <a href="/consultations" className="btn-secondary w-full sm:w-auto">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
