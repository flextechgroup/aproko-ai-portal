
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Brain, 
  Heart, 
  Smile, 
  BookOpen, 
  Users, 
  Zap, 
  ChevronRight, 
  Clock, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MentalHealthHero = () => (
  <div className="relative py-20 px-4 bg-gradient-to-r from-[#e0f2fe] to-[#dbeafe]">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-text-dark backdrop-blur-sm text-sm font-medium">
            Mental Health & Wellbeing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Prioritize Your <span className="text-primary">Mental</span> Health
          </h1>
          <p className="text-text-dark text-lg mb-8 max-w-xl">
            Reliable information, practical strategies, and supportive resources to help you manage your mental wellbeing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/chat" className="btn-primary">
              Ask a Mental Health Question
            </Link>
            <a href="#mental-health-topics" className="btn-secondary">
              Explore Topics
            </a>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="aspect-square max-w-md mx-auto relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80" 
              alt="Peaceful meditation scene" 
              className="rounded-aproko object-cover w-full h-full shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-aproko shadow-card">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">Self-care matters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface TopicCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const TopicCard = ({ icon, title, description, link, index }: TopicCardProps) => (
  <Card className="card-base hover-scale group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
    <CardHeader>
      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-2">
        {icon}
      </div>
      <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-text-muted">{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Link to={link} className="text-primary flex items-center text-sm font-medium group-hover:underline">
        Explore
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardFooter>
  </Card>
);

interface ResourceCardProps {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  index: number;
}

const ResourceCard = ({ title, excerpt, image, readTime, category, index }: ResourceCardProps) => (
  <Card className="card-base overflow-hidden hover-scale group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
    <div className="relative aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/70 text-white text-xs flex items-center">
        <Clock className="h-3 w-3 mr-1" />
        {readTime}
      </div>
    </div>
    <CardHeader className="pb-2">
      <div className="text-xs font-medium text-primary mb-1">{category}</div>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-text-muted line-clamp-2">{excerpt}</CardDescription>
    </CardContent>
    <CardFooter>
      <Link to="/mental-health" className="text-primary flex items-center text-sm font-medium">
        Read more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardFooter>
  </Card>
);

const QuickTipCard = ({ tip, index }: { tip: string; index: number }) => (
  <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
    <div className="flex-shrink-0 mt-1">
      <CheckCircle className="h-5 w-5 text-primary" />
    </div>
    <p className="text-sm text-text-dark">{tip}</p>
  </div>
);

const MentalHealth = () => {
  const topics = [
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: 'Anxiety Management',
      description: 'Practical strategies to help reduce anxiety and manage stress in your daily life.',
      link: '/mental-health/anxiety',
    },
    {
      icon: <Smile className="h-6 w-6 text-primary" />,
      title: 'Depression Support',
      description: 'Understanding depression and finding effective ways to support your mental health journey.',
      link: '/mental-health/depression',
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: 'Mindfulness Practices',
      description: 'Simple mindfulness and meditation techniques to improve focus and reduce stress.',
      link: '/mental-health/mindfulness',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Healthy Relationships',
      description: 'Building and maintaining supportive relationships that contribute to mental wellbeing.',
      link: '/mental-health/relationships',
    },
  ];

  const resources = [
    {
      title: 'Managing Work-Related Stress',
      excerpt: 'Effective strategies to recognize and manage workplace stress before it affects your health.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
      readTime: '6 min read',
      category: 'Stress Management',
    },
    {
      title: 'Creating a Personal Self-Care Routine',
      excerpt: 'How to design and stick to a self-care routine that works for your lifestyle and unique needs.',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
      readTime: '5 min read',
      category: 'Self-Care',
    },
    {
      title: 'The Connection Between Sleep and Mental Health',
      excerpt: 'Understanding how quality sleep directly impacts your mental wellbeing and cognitive function.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
      readTime: '7 min read',
      category: 'Sleep Health',
    },
  ];

  const quickTips = [
    "Practice deep breathing for 5 minutes when feeling overwhelmed.",
    "Stay hydrated throughout the day to support brain function and mood regulation.",
    "Limit social media use to reduce comparison and information overload.",
    "Move your body daily – even a 10-minute walk can boost mood and reduce anxiety.",
    "Create boundaries between work and personal time to prevent burnout.",
    "Express gratitude by noting three things you're thankful for each day."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <MentalHealthHero />
        
        {/* Topics section */}
        <div className="py-16 px-4" id="mental-health-topics">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
                Key Topics
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Mental Health Focus Areas
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Explore these important topics to better understand and support your mental wellbeing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic, index) => (
                <TopicCard
                  key={index}
                  icon={topic.icon}
                  title={topic.title}
                  description={topic.description}
                  link={topic.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Tips section */}
        <div className="py-16 px-4 bg-primary-light">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-primary backdrop-blur-sm text-sm font-medium">
                  Quick Tips
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Simple Ways to Support Your Mental Health
                </h2>
                <p className="text-text-dark mb-8">
                  Small actions can have a big impact on your mental wellbeing. Try incorporating these simple practices into your daily routine.
                </p>
                
                <div className="space-y-4">
                  {quickTips.map((tip, index) => (
                    <QuickTipCard key={index} tip={tip} index={index} />
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/mental-health/daily-practices" className="text-primary inline-flex items-center font-medium">
                    Discover more daily practices
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&q=80" 
                    alt="Person enjoying nature" 
                    className="rounded-aproko object-cover w-full h-full shadow-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resources section */}
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-light text-secondary-foreground text-sm font-medium">
                  Helpful Resources
                </div>
                <h2 className="text-3xl font-bold mb-4">Mental Health Articles</h2>
                <p className="text-text-muted max-w-xl">
                  Evidence-based information and practical advice to support your mental wellbeing journey.
                </p>
              </div>
              <Link
                to="/mental-health/resources"
                className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium"
              >
                View all resources
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  excerpt={resource.excerpt}
                  image={resource.image}
                  readTime={resource.readTime}
                  category={resource.category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-aproko p-8 shadow-card text-center animate-scale">
              <h2 className="text-3xl font-bold mb-4">
                Need Personalized Mental Health Support?
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto mb-8">
                Connect with our AI assistant for immediate resources or schedule a consultation with a mental health professional.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/chat" className="btn-primary w-full sm:w-auto">
                  Chat with Aproko AI
                </Link>
                <Link to="/consultations" className="btn-secondary w-full sm:w-auto">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentalHealth;
