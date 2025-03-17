
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Basic',
      description: 'Essential features for beginners',
      priceMonthly: '$9.99',
      priceYearly: '$99.90',
      saving: 'Save $19.98',
      features: [
        { label: 'Personalized meal suggestions', included: true },
        { label: 'Basic workout plans', included: true },
        { label: 'Progress tracking', included: true },
        { label: 'Community forum access', included: true },
        { label: 'Expert consultations', included: false },
        { label: 'Premium content', included: false },
      ],
      buttonVariant: 'outline' as const,
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Perfect for dedicated health enthusiasts',
      priceMonthly: '$19.99',
      priceYearly: '$199.90',
      saving: 'Save $39.98',
      features: [
        { label: 'Personalized meal suggestions', included: true },
        { label: 'Advanced workout plans', included: true },
        { label: 'Detailed progress analytics', included: true },
        { label: 'Community forum access', included: true },
        { label: '2 Expert consultations/month', included: true },
        { label: 'Premium content', included: true },
      ],
      buttonVariant: 'default' as const,
      popular: true,
    },
    {
      name: 'Ultimate',
      description: 'All features plus priority support',
      priceMonthly: '$29.99',
      priceYearly: '$299.90',
      saving: 'Save $59.98',
      features: [
        { label: 'Personalized meal suggestions', included: true },
        { label: 'Advanced workout plans', included: true },
        { label: 'Detailed progress analytics', included: true },
        { label: 'VIP community forum access', included: true },
        { label: 'Unlimited Expert consultations', included: true },
        { label: 'Premium content + early access', included: true },
      ],
      buttonVariant: 'outline' as const,
      popular: false,
    },
  ];

  return (
    <div className="my-10">
      <div className="flex justify-center items-center space-x-3 mb-8">
        <Label htmlFor="billing-toggle" className={`${billingCycle === 'monthly' ? 'font-medium' : 'text-muted-foreground'}`}>
          Monthly
        </Label>
        <Switch 
          id="billing-toggle" 
          checked={billingCycle === 'yearly'} 
          onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
        />
        <Label htmlFor="billing-toggle" className={`flex items-center ${billingCycle === 'yearly' ? 'font-medium' : 'text-muted-foreground'}`}>
          Yearly
          <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Save up to 20%</span>
        </Label>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <p className="text-3xl font-bold">
                  {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceYearly}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </p>
                {billingCycle === 'yearly' && (
                  <p className="text-sm text-green-600 font-medium">{plan.saving}</p>
                )}
              </div>
              
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground'}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.buttonVariant}>
                {plan.popular ? 'Get Started' : 'Subscribe'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
