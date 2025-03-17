
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-poppins font-bold">
                AprokoHealth
              </span>
            </div>
            <p className="text-text-muted mb-6 text-sm">
              Your trusted source for accurate health information, combating medical misinformation with AI-powered advice and professional guidance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Chat with AI
                </Link>
              </li>
              <li>
                <Link to="/consultations" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Video Library
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text-muted hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-text-muted hover:text-primary transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-text-muted hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">hello@aprokohealth.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">+234 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-text-muted text-sm">
                  123 Health Avenue, Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} AprokoHealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
