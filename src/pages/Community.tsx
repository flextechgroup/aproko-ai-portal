
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageSquare, ThumbsUp, ChevronDown, CheckCircle, Search, Filter, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Discussion {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  replies: number;
  likes: number;
  isVerified?: boolean;
  isPopular?: boolean;
  date: string;
  tags: string[];
}

const DiscussionCard = ({
  title,
  excerpt,
  author,
  avatar,
  replies,
  likes,
  isVerified,
  isPopular,
  date,
  tags,
}: Omit<Discussion, 'id'>) => {
  return (
    <div className="card-base group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{author}</span>
            <span className="text-xs text-text-muted">{date}</span>
          </div>
        </div>
        <div className="flex gap-2">
          {isVerified && (
            <div className="px-2 py-1 rounded-full bg-success-foreground/10 text-success flex items-center text-xs">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified
            </div>
          )}
          {isPopular && (
            <div className="px-2 py-1 rounded-full bg-accent-foreground/10 text-accent flex items-center text-xs">
              <ThumbsUp className="h-3 w-3 mr-1" />
              Popular
            </div>
          )}
        </div>
      </div>
      <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm mb-4 line-clamp-3">{excerpt}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-text-muted text-sm">
            <MessageSquare className="h-4 w-4 mr-1" />
            {replies} replies
          </div>
          <div className="flex items-center text-text-muted text-sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {likes} likes
          </div>
        </div>
        <Link
          to={`/community/discussion`}
          className="text-primary text-sm font-medium hover:underline"
        >
          Join discussion
        </Link>
      </div>
    </div>
  );
};

const Community = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General Health' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'mental', name: 'Mental Health' },
    { id: 'chronic', name: 'Chronic Conditions' },
  ];
  
  const discussions: Discussion[] = [
    {
      id: 1,
      title: 'How to manage anxiety without medication?',
      excerpt: "I've been struggling with anxiety lately and would prefer non-medication approaches first. What has worked for others? I'm particularly interested in mindfulness techniques and exercise routines that might help reduce anxiety symptoms.",
      author: 'Sarah K.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      replies: 24,
      likes: 56,
      isVerified: true,
      date: '2 days ago',
      tags: ['Mental Health', 'Anxiety', 'Natural Remedies']
    },
    {
      id: 2,
      title: 'Is intermittent fasting actually beneficial?',
      excerpt: "There's so much contradicting information about intermittent fasting. Can someone explain the actual science? I've been trying the 16:8 method but I'm not sure if I'm doing it correctly or if it's even worth continuing.",
      author: 'Michael T.',
      avatar: 'https://i.pravatar.cc/150?img=2',
      replies: 18,
      likes: 42,
      isPopular: true,
      date: '3 days ago',
      tags: ['Nutrition', 'Fasting', 'Weight Management']
    },
    {
      id: 3,
      title: 'Chronic back pain remedies that actually work',
      excerpt: "After years of back pain and trying everything, here's what finally helped me. Looking for other experiences as well. I found a combination of physical therapy, specific stretches, and ergonomic adjustments made the biggest difference.",
      author: 'James L.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      replies: 31,
      likes: 67,
      date: '1 week ago',
      tags: ['Chronic Pain', 'Physical Therapy', 'Back Health']
    },
    {
      id: 4,
      title: 'Best foods to boost immune system?',
      excerpt: "With cold and flu season approaching, I'm looking for natural ways to boost my immune system through diet. What foods have you found most effective? I'm especially interested in vegetarian options.",
      author: 'Emma R.',
      avatar: 'https://i.pravatar.cc/150?img=4',
      replies: 15,
      likes: 38,
      date: '4 days ago',
      tags: ['Nutrition', 'Immune Health', 'Seasonal']
    },
    {
      id: 5,
      title: 'Daily water intake - how much is really necessary?',
      excerpt: "We always hear about drinking 8 glasses of water daily, but is this scientifically backed? How do you determine the right amount for your body? I've been tracking my intake and wondering if I'm overthinking this.",
      author: 'David M.',
      avatar: 'https://i.pravatar.cc/150?img=5',
      replies: 22,
      likes: 49,
      isVerified: true,
      date: '5 days ago',
      tags: ['Hydration', 'Daily Habits', 'Health Basics']
    },
    {
      id: 6,
      title: 'Managing diabetes with exercise - success stories?',
      excerpt: "Recently diagnosed with Type 2 diabetes and looking for exercise routines that have helped others manage their blood sugar. Would love to hear success stories and practical advice from the community.",
      author: 'Patricia N.',
      avatar: 'https://i.pravatar.cc/150?img=6',
      replies: 29,
      likes: 53,
      isPopular: true,
      date: '1 day ago',
      tags: ['Diabetes', 'Exercise', 'Chronic Management']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
              Health Discussions
            </div>
            <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Connect with others, share experiences, and get answers to your health questions from our community of users and medical professionals.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="input-base pl-10 w-full"
                    placeholder="Search discussions..."
                  />
                </div>
                <div className="flex gap-2">
                  <button className="btn-secondary flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <button className="btn-primary">Start Discussion</button>
                </div>
              </div>
              
              {/* Categories */}
              <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Discussions */}
              <div className="grid grid-cols-1 gap-6">
                {discussions.map((discussion) => (
                  <DiscussionCard
                    key={discussion.id}
                    title={discussion.title}
                    excerpt={discussion.excerpt}
                    author={discussion.author}
                    avatar={discussion.avatar}
                    replies={discussion.replies}
                    likes={discussion.likes}
                    isVerified={discussion.isVerified}
                    isPopular={discussion.isPopular}
                    date={discussion.date}
                    tags={discussion.tags}
                  />
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <button className="btn-secondary">Load More</button>
              </div>
            </div>
            
            <div className="lg:w-1/4 space-y-6">
              {/* Community stats */}
              <div className="card-base">
                <h3 className="font-semibold text-lg mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Active Discussions</span>
                    <span className="font-medium">1,248</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Community Members</span>
                    <span className="font-medium">8,376</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Health Professionals</span>
                    <span className="font-medium">142</span>
                  </div>
                </div>
              </div>
              
              {/* Popular tags */}
              <div className="card-base">
                <h3 className="font-semibold text-lg mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Nutrition</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Mental Health</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Exercise</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sleep</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Chronic Pain</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Weight Management</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Anxiety</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Diabetes</span>
                </div>
              </div>
              
              {/* Community guidelines */}
              <div className="card-base">
                <div className="flex items-start space-x-3">
                  <div className="bg-info-foreground/10 p-2 rounded-full">
                    <AlertCircle className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Community Guidelines</h3>
                    <p className="text-text-muted text-sm mb-4">
                      Our community is moderated to ensure respectful discussions and accurate health information.
                    </p>
                    <a href="#" className="text-primary text-sm font-medium hover:underline">
                      Read our guidelines
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

export default Community;
