
import React from 'react';
import { Play, ChevronRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoCard = ({ 
  title, 
  duration, 
  thumbnail, 
  category, 
  index 
}: { 
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
  index: number;
}) => {
  return (
    <div 
      className={`card-base overflow-hidden hover-scale group animate-fade-in`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video rounded-aproko overflow-hidden mb-4">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transition-transform group-hover:scale-110"
          >
            <Play className="h-5 w-5 text-primary fill-current" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full bg-black/70 text-white text-xs flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {duration}
        </div>
      </div>
      <div className="text-xs font-medium text-primary mb-1">{category}</div>
      <h3 className="font-medium text-base mb-2 line-clamp-2">{title}</h3>
    </div>
  );
};

const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: 'Debunking 5 Common Sleep Myths',
      duration: '4:32',
      thumbnail: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c',
      category: 'Myth Busting'
    },
    {
      id: 2,
      title: 'What Your Headache is Trying to Tell You',
      duration: '6:18',
      thumbnail: 'https://images.unsplash.com/photo-1616012460129-2ed8b7688392',
      category: 'Symptoms'
    },
    {
      id: 3,
      title: 'Doctor Reviews TikTok Health Trends',
      duration: '8:45',
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      category: 'Doctor Reacts'
    },
    {
      id: 4,
      title: 'The Truth About Vitamin Supplements',
      duration: '5:22',
      thumbnail: 'https://images.unsplash.com/photo-1577460551100-904a744c85e0',
      category: 'Nutrition'
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-light text-secondary-foreground text-sm font-medium">
              Video Library
            </div>
            <h2 className="text-3xl font-bold mb-2">Featured Health Videos</h2>
            <p className="text-text-muted max-w-xl">
              Short, informative videos by medical professionals to help you understand health topics better.
            </p>
          </div>
          <Link to="/videos" className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium">
            View all videos
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              title={video.title}
              duration={video.duration}
              thumbnail={video.thumbnail}
              category={video.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideos;
