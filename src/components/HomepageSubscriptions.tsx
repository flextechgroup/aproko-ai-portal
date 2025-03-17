
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomepageSubscriptions = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      description: 'Essential features for beginners',
      features: ['Personalized meal suggestions', 'Basic workout plans', 'Community forum access'],
      color: 'bg-blue-50 border-blue-200',
      buttonVariant: 'outline' as const,
      iconColor: 'text-blue-500',
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: '/month',
      description: 'Perfect for health enthusiasts',
      features: ['All Basic features', 'Advanced workout plans', '2 Expert consultations/month'],
      color: 'bg-primary-light border-primary',
      buttonVariant: 'default' as const,
      iconColor: 'text-primary',
      popular: true,
    },
    {
      name: 'Ultimate',
      price: '$29.99',
      period: '/month',
      description: 'All features plus priority support',
      features: ['All Pro features', 'Unlimited consultations', 'Priority support'],
      color: 'bg-purple-50 border-purple-200',
      buttonVariant: 'outline' as const,
      iconColor: 'text-purple-500',
    },
  ];

  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
            Subscription Plans
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Choose Your Health Journey
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Get personalized health guidance, expert consultations, and premium content 
            tailored to your wellness goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-lg p-6 ${plan.color} transition-transform hover:scale-105 duration-300 relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-text-muted text-sm ml-1">{plan.period}</span>
              </div>
              <p className="text-text-muted text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`h-5 w-5 ${plan.iconColor} mr-2 shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.buttonVariant}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link 
            to="/subscriptions" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all plan details and features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomepageSubscriptions;
