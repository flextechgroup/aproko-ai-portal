import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  Apple, 
  Salad, 
  Beef, 
  Fish, 
  ChevronRight, 
  Clock, 
  Heart, 
  BookOpen, 
  AlertTriangle 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const NutritionHero = () => (
  <div className="relative py-20 px-4 bg-gradient-to-r from-primary-light to-secondary-light">
    <div className="container mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 text-text-dark backdrop-blur-sm text-sm font-medium">
            Nutrition & Diet
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Power of <span className="text-primary">Nutritious</span> Eating
          </h1>
          <p className="text-text-dark text-lg mb-8 max-w-xl">
            Evidence-based nutrition information to help you make informed dietary choices for optimal health and wellbeing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/chat" className="btn-primary">
              Ask a Nutrition Question
            </Link>
            <a href="#nutrition-basics" className="btn-secondary">
              Nutrition Basics
            </a>
          </div>
        </div>
        <div className="relative order-first lg:order-last">
          <div className="aspect-square max-w-md mx-auto relative animate-float">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Fresh fruits and vegetables" 
              className="rounded-aproko object-cover w-full h-full shadow-card"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-aproko shadow-card">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="font-medium">Heart-healthy choices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface NutritionCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const NutritionCategory = ({ icon, title, description, link, index }: NutritionCategoryProps) => (
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
        Learn more
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardFooter>
  </Card>
);

interface NutritionArticleProps {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  index: number;
}

const NutritionArticle = ({ title, excerpt, image, readTime, category, index }: NutritionArticleProps) => (
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
      <Link to="/nutrition" className="text-primary flex items-center text-sm font-medium">
        Read article
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </CardFooter>
  </Card>
);

const NutritionMythCard = ({ myth, fact, index }: { myth: string; fact: string; index: number }) => (
  <Card className="card-base animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
    <CardHeader>
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-5 w-5 text-accent" />
        <div className="text-sm font-medium text-accent">Myth</div>
      </div>
      <CardTitle className="text-lg">{myth}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-start gap-2 mb-2">
        <BookOpen className="h-5 w-5 text-primary mt-1" />
        <div className="text-sm font-medium text-primary">Fact</div>
      </div>
      <CardDescription>{fact}</CardDescription>
    </CardContent>
  </Card>
);

const Nutrition = () => {
  const categories = [
    {
      icon: <Apple className="h-6 w-6 text-primary" />,
      title: 'Whole Foods',
      description: 'Learn about the benefits of eating whole, unprocessed foods and how to incorporate more into your diet.',
      link: '/nutrition/whole-foods',
    },
    {
      icon: <Salad className="h-6 w-6 text-primary" />,
      title: 'Plant-Based Eating',
      description: 'Discover the health benefits of plant-based diets and easy ways to add more plants to your meals.',
      link: '/nutrition/plant-based',
    },
    {
      icon: <Beef className="h-6 w-6 text-primary" />,
      title: 'Protein Sources',
      description: 'Find the right balance of protein in your diet from both animal and plant sources.',
      link: '/nutrition/protein',
    },
    {
      icon: <Fish className="h-6 w-6 text-primary" />,
      title: 'Healthy Fats',
      description: 'Learn which fats to include in your diet and which ones to limit for optimal health.',
      link: '/nutrition/fats',
    },
  ];

  const articles = [
    {
      title: 'The Truth About Carbohydrates',
      excerpt: 'Not all carbs are created equal. Learn which carbohydrates provide valuable nutrients and which ones to limit.',
      image: 'https://images.unsplash.com/photo-1556442354-e5a69f380091',
      readTime: '5 min read',
      category: 'Macronutrients',
    },
    {
      title: 'Eating for Better Sleep',
      excerpt: 'Discover which foods can help improve your sleep quality and which ones might be keeping you up at night.',
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55',
      readTime: '7 min read',
      category: 'Wellness',
    },
    {
      title: 'Meal Prepping for Beginners',
      excerpt: 'Simple strategies to make healthy meal preparation easier and fit into your busy lifestyle.',
      image: 'https://images.unsplash.com/photo-1546548970-71785318a17b',
      readTime: '6 min read',
      category: 'Practical Tips',
    },
  ];

  const myths = [
    {
      myth: 'Eating fat makes you fat',
      fact: 'Healthy fats are essential for proper body function and can actually help with weight management when consumed in appropriate amounts.'
    },
    {
      myth: 'All calories are equal',
      fact: '200 calories from almonds affect your body differently than 200 calories from candy. The nutrient composition matters significantly.'
    },
    {
      myth: 'Eating at night causes weight gain',
      fact: 'Total daily calorie intake and quality of food choices matter more than the timing of your meals.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <NutritionHero />
        
        {/* Categories section */}
        <div className="py-16 px-4" id="nutrition-basics">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
                Nutrition Fundamentals
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Core Nutrition Categories
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Understanding these key areas will help you build a balanced and nutritious diet tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <NutritionCategory
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  link={category.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Articles section */}
        <div className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-secondary-light text-secondary-foreground text-sm font-medium">
                  Featured Articles
                </div>
                <h2 className="text-3xl font-bold mb-4">Latest Nutrition Insights</h2>
                <p className="text-text-muted max-w-xl">
                  Evidence-based articles on nutrition to help guide your dietary decisions.
                </p>
              </div>
              <Link
                to="/nutrition/articles"
                className="mt-4 md:mt-0 group inline-flex items-center text-primary font-medium"
              >
                View all articles
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <NutritionArticle
                  key={index}
                  title={article.title}
                  excerpt={article.excerpt}
                  image={article.image}
                  readTime={article.readTime}
                  category={article.category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Myths section */}
        <div className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-accent-light text-accent text-sm font-medium">
                Myth Busting
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Common Nutrition Myths
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Separating nutrition facts from fiction to help you make better dietary choices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {myths.map((item, index) => (
                <NutritionMythCard
                  key={index}
                  myth={item.myth}
                  fact={item.fact}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/chat" className="btn-primary">
                Ask About Other Nutrition Myths
              </Link>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="py-16 px-4 bg-primary-light">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-aproko p-8 shadow-card text-center animate-scale">
              <h2 className="text-3xl font-bold mb-4">
                Get Personalized Nutrition Advice
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto mb-8">
                Connect with our AI assistant or qualified nutritionists for guidance tailored to your specific health needs and goals.
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

export default Nutrition;
