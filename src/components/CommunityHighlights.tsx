
import React from 'react';
import { MessageSquare, ThumbsUp, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscussionCard = ({
  title,
  excerpt,
  author,
  avatar,
  replies,
  likes,
  isVerified,
  isPopular,
  index,
}: {
  title: string;
  excerpt: string;
  author: string;
  avatar: string;
  replies: number;
  likes: number;
  isVerified?: boolean;
  isPopular?: boolean;
  index: number;
}) => {
  return (
    <div
      className="card-base group animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <img
            src={avatar}
            alt={author}
            className="w-8 h-8 rounded-full mr-3"
          />
          <span className="text-sm font-medium">{author}</span>
        </div>
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
      <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-text-muted text-sm mb-4 line-clamp-2">{excerpt}</p>
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
          to="/community"
          className="text-primary text-sm font-medium hover:underline"
        >
          Join discussion
        </Link>
      </div>
    </div>
  );
};

const CommunityHighlights = () => {
  const discussions = [
    {
      id: 1,
      title: 'How to manage anxiety without medication?',
      excerpt:
        "I've been struggling with anxiety lately and would prefer non-medication approaches first. What has worked for others?",
      author: 'Sarah K.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      replies: 24,
      likes: 56,
      isVerified: true,
    },
    {
      id: 2,
      title: 'Is intermittent fasting actually beneficial?',
      excerpt:
        "There's so much contradicting information about intermittent fasting. Can someone explain the actual science?",
      author: 'Michael T.',
      avatar: 'https://i.pravatar.cc/150?img=2',
      replies: 18,
      likes: 42,
      isPopular: true,
    },
    {
      id: 3,
      title: 'Chronic back pain remedies that actually work',
      excerpt:
        "After years of back pain and trying everything, here's what finally helped me. Looking for other experiences as well.",
      author: 'James L.',
      avatar: 'https://i.pravatar.cc/150?img=3',
      replies: 31,
      likes: 67,
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent-light text-accent-foreground text-sm font-medium">
              Community
            </div>
            <h2 className="text-3xl font-bold mb-2">Trending Discussions</h2>
            <p className="text-text-muted max-w-xl">
              Join conversations about health topics that matter to you, answered
              by our community and verified health professionals.
            </p>
          </div>
          <Link
            to="/community"
            className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium"
          >
            View all discussions
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {discussions.map((discussion, index) => (
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
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="card-base inline-block max-w-2xl animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="bg-info-foreground/10 p-3 rounded-full">
                <AlertCircle className="h-6 w-6 text-info" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-lg mb-2">
                  Medically Verified Discussions
                </h3>
                <p className="text-text-muted mb-4">
                  All discussions are moderated and important health information is
                  verified by our team of medical professionals to ensure you get
                  accurate information.
                </p>
                <Link to="/community" className="btn-primary">
                  Join the Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHighlights;
