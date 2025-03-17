
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Dumbbell, 
  Heart, 
  Watch, 
  Flame, 
  Activity, 
  Utensils, 
  ChevronRight, 
  Clock, 
  Play, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FitnessHero = () => (
  <div className="relative py-20 px-4 bg-gradient-to-r from-[#dcfce7] to-[#ecfdf5]">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-text-dark backdrop-blur-sm text-sm font-medium">
            Fitness & Exercise
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Move Your Way to <span className="text-primary">Better</span> Health
          </h1>
          <p className="text-text-dark text-lg mb-8 max-w-xl">
            Evidence-based fitness information to help you create an effective exercise routine that works for your body and lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/chat" className="btn-primary">
              Ask a Fitness Question
            </Link>
            <a href="#fitness-benefits" className="btn-secondary">
              Fitness Benefits
            </a>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="aspect-square max-w-md mx-auto relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80" 
              alt="Person exercising" 
              className="rounded-aproko object-cover w-full h-full shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-aproko shadow-card">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">Movement for all bodies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ icon, title, description, index }: BenefitCardProps) => (
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
  </Card>
);

interface WorkoutCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  index: number;
}

const WorkoutCard = ({ title, description, image, duration, level, index }: WorkoutCardProps) => (
  <Card className="card-base overflow-hidden hover-scale group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
    <div className="relative aspect-video overflow-hidden mb-2">
      <img
        src={image}
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
    <CardHeader className="pb-2">
      <div className="text-xs font-medium text-primary mb-1">{level} Level</div>
      <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-text-muted line-clamp-2">{description}</CardDescription>
    </CardContent>
    <CardFooter>
      <Link to="/fitness/workouts" className="text-primary flex items-center text-sm font-medium">
        View workout
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardFooter>
  </Card>
);

const FitnessTip = ({ tip, index }: { tip: string; index: number }) => (
  <div className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
    <div className="flex-shrink-0 mt-1">
      <CheckCircle className="h-5 w-5 text-primary" />
    </div>
    <p className="text-sm text-text-dark">{tip}</p>
  </div>
);

const Fitness = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: 'Heart Health',
      description: 'Regular exercise strengthens your heart and improves your circulation, lowering your risk of heart diseases.',
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: 'Better Breathing',
      description: 'Physical activity can help your lungs and cardiovascular system work more efficiently.',
    },
    {
      icon: <Flame className="h-6 w-6 text-primary" />,
      title: 'Weight Management',
      description: 'Exercise helps prevent excess weight gain and helps maintain weight loss when combined with a healthy diet.',
    },
    {
      icon: <Watch className="h-6 w-6 text-primary" />,
      title: 'Stress Reduction',
      description: 'Physical activity stimulates brain chemicals that leave you feeling happier and more relaxed.',
    },
  ];

  const workouts = [
    {
      title: 'Full-Body Strength Workout',
      description: 'A balanced strength workout targeting all major muscle groups using minimal equipment.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e',
      duration: '30 min',
      level: 'Beginner',
    },
    {
      title: 'Cardio HIIT Circuit',
      description: 'High-intensity interval training to boost your cardio fitness and calorie burn.',
      image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e',
      duration: '25 min',
      level: 'Intermediate',
    },
    {
      title: 'Gentle Mobility Flow',
      description: 'Improve your flexibility and joint mobility with this gentle, accessible movement practice.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      duration: '20 min',
      level: 'All',
    },
  ];

  const fitnessTips = [
    "Start small and gradually increase intensity to prevent injury and build consistency.",
    "Find activities you enjoy - exercise doesn't have to mean going to the gym.",
    "Mix up your routine with both cardio and strength training for balanced fitness.",
    "Schedule exercise like any other important appointment to maintain consistency.",
    "Stay hydrated before, during, and after workouts to optimize performance.",
    "Rest days are important - your body needs time to recover and rebuild."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <FitnessHero />
        
        {/* Benefits section */}
        <div className="py-16 px-4" id="fitness-benefits">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
                Why Exercise Matters
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Benefits of Regular Physical Activity
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Moving your body regularly offers numerous health benefits that improve both physical and mental wellbeing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Workouts section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-light text-secondary-foreground text-sm font-medium">
                  Featured Workouts
                </div>
                <h2 className="text-3xl font-bold mb-4">Exercise for Every Body</h2>
                <p className="text-text-muted max-w-xl">
                  Try these approachable workouts designed for different fitness levels and goals.
                </p>
              </div>
              <Link
                to="/fitness/workouts"
                className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium"
              >
                View all workouts
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workouts.map((workout, index) => (
                <WorkoutCard
                  key={index}
                  title={workout.title}
                  description={workout.description}
                  image={workout.image}
                  duration={workout.duration}
                  level={workout.level}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Fitness tips section */}
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-last lg:order-first">
                <div className="aspect-square max-w-md mx-auto relative animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80" 
                    alt="Person stretching" 
                    className="rounded-aproko object-cover w-full h-full shadow-card"
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
                  Exercise Smart
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  Fitness Tips for Success
                </h2>
                <p className="text-text-dark mb-8">
                  Whether you're just starting out or looking to enhance your current routine, these tips can help you get more from your fitness efforts.
                </p>
                
                <div className="space-y-4">
                  {fitnessTips.map((tip, index) => (
                    <FitnessTip key={index} tip={tip} index={index} />
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/fitness/tips" className="text-primary inline-flex items-center font-medium">
                    View more fitness tips
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nutrition & Fitness section */}
        <div className="py-16 px-4 bg-secondary-light">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-aproko p-8 shadow-card">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3">
                  <Utensils className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Nutrition & Fitness</h3>
                  <p className="text-text-muted mb-4">
                    Learn how proper nutrition complements your fitness routine to maximize your results and support recovery.
                  </p>
                  <Link to="/nutrition" className="btn-primary">
                    Explore Nutrition
                  </Link>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="card-base hover-scale">
                    <CardHeader>
                      <CardTitle className="text-lg">Pre-Workout Nutrition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Discover what to eat before exercise to optimize energy and performance during your workout.</CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="card-base hover-scale">
                    <CardHeader>
                      <CardTitle className="text-lg">Recovery Nutrition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>Learn what to eat after exercise to support muscle recovery and replenish energy stores.</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary-light">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-aproko p-8 shadow-card text-center animate-scale">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto mb-8">
                Get personalized fitness guidance based on your health goals, fitness level, and personal preferences.
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

export default Fitness;
