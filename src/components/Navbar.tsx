
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Search, ChevronDown, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/coming-soon', { state: { pageName: 'Sign In' } });
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-white/0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-poppins font-bold">
                AprokoHealth
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className={`link-underline text-sm font-medium ${
                isActive('/') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`link-underline text-sm font-medium ${
                isActive('/chat') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Chat with AI
            </Link>
            <Link
              to="/nutrition"
              className={`link-underline text-sm font-medium ${
                isActive('/nutrition') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Nutrition
            </Link>
            <Link
              to="/mental-health"
              className={`link-underline text-sm font-medium ${
                isActive('/mental-health') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Mental Health
            </Link>
            <Link
              to="/fitness"
              className={`link-underline text-sm font-medium ${
                isActive('/fitness') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Fitness
            </Link>
            <Link
              to="/consultations"
              className={`link-underline text-sm font-medium ${
                isActive('/consultations') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Consultations
            </Link>
            <Link
              to="/community"
              className={`link-underline text-sm font-medium ${
                isActive('/community') ? 'text-primary' : 'text-text-dark'
              }`}
            >
              Community
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              type="button"
              className="rounded-full p-2 text-text-dark hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#"
              onClick={handleSignIn}
              className="btn-primary"
            >
              Sign In
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-text-dark hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-in-top">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              to="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/chat') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Chat with AI
            </Link>
            <Link
              to="/nutrition"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/nutrition') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Nutrition
            </Link>
            <Link
              to="/mental-health"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/mental-health') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Mental Health
            </Link>
            <Link
              to="/fitness"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/fitness') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Fitness
            </Link>
            <Link
              to="/consultations"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/consultations') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Consultations
            </Link>
            <Link
              to="/community"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                isActive('/community') ? 'bg-primary-light text-primary' : 'text-text-dark hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/coming-soon', { state: { pageName: 'Sign In' } });
                setIsOpen(false);
              }}
              className="block rounded-md px-3 py-2 text-base font-medium bg-primary text-white"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
