
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ComingSoon = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = location.state?.pageName || 'This page';

  useEffect(() => {
    // Log that the user visited a coming soon page
    console.log(`User visited coming soon page for: ${location.pathname}`);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-light mb-6 animate-float">
              <Clock className="h-10 w-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Coming Soon
            </h1>
            
            <div className="bg-muted rounded-lg p-6 mb-8 animate-scale">
              <p className="text-xl mb-2">
                <span className="font-semibold">{pageName}</span> is currently under development
              </p>
              <p className="text-text-muted">
                Our team is working hard to bring you amazing features. 
                Please check back later!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
              
              <Button
                onClick={() => navigate('/')}
                variant="default"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
