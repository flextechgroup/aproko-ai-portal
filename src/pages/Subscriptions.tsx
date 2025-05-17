
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscriptionPlans from '../components/SubscriptionPlans';
import SubscriptionFAQ from '../components/SubscriptionFAQ';
import { CrownIcon, ShieldCheck } from 'lucide-react';

const Subscriptions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/20 text-secondary mb-4">
            <CrownIcon className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Affordable Plans</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Unlock Premium Health Benefits</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your health journey and budget. Starting from just ₦1,500/month, 
            gain access to personalized nutrition plans, expert consultations, and exclusive content.
          </p>
        </section>
        
        <SubscriptionPlans />
        
        <section className="my-16 max-w-4xl mx-auto p-8 rounded-lg bg-muted">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">Our Guarantee</h2>
          </div>
          <p className="mb-4">
            We're confident you'll love your subscription. If you're not completely satisfied within 
            the first 14 days, we'll refund your payment - no questions asked.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Try Risk-Free</h3>
              <p className="text-sm text-muted-foreground">14-day money-back guarantee for all new subscribers.</p>
            </div>
            <div className="bg-background p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Cancel Anytime</h3>
              <p className="text-sm text-muted-foreground">No long-term contracts, cancel your subscription whenever you need.</p>
            </div>
            <div className="bg-background p-5 rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">All transactions are secured with industry-standard encryption.</p>
            </div>
          </div>
        </section>

        <SubscriptionFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Subscriptions;
