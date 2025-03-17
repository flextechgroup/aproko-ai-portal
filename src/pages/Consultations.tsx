
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Star, ChevronDown, Filter, Search, Check } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  available: boolean;
  availableDates: string[];
  price: number;
  experience: number;
  languages: string[];
  education: string;
  certifications: string[];
}

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-base overflow-hidden animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img
            src={doctor.avatar}
            alt={doctor.name}
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <div>
              <h3 className="font-semibold text-lg">{doctor.name}</h3>
              <p className="text-text-muted">{doctor.specialty}</p>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center text-secondary">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 font-medium">{doctor.rating.toFixed(1)}</span>
              </div>
              <span className="text-text-muted text-sm ml-1">({doctor.reviewCount})</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-primary-light text-primary text-xs rounded-full">
              {doctor.experience} years exp
            </span>
            
            <span className="px-2 py-1 bg-gray-100 text-text-muted text-xs rounded-full">
              {doctor.languages.join(', ')}
            </span>
            
            {doctor.available && (
              <span className="px-2 py-1 bg-success-foreground/10 text-success text-xs rounded-full flex items-center">
                <Check className="h-3 w-3 mr-1" />
                Available today
              </span>
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-primary font-bold text-lg">
                ₦{doctor.price.toLocaleString()}
              </p>
              <p className="text-text-muted text-xs">per consultation</p>
            </div>
            
            <button
              type="button"
              className="btn-primary"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <button
          type="button"
          className="flex items-center justify-center w-full text-primary font-medium text-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show less' : 'View details'}
          <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <h4 className="font-medium mb-1">Education</h4>
              <p className="text-text-muted text-sm">{doctor.education}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-1">Certifications</h4>
              <ul className="list-disc pl-5 text-text-muted text-sm">
                {doctor.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Available Dates</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.availableDates.map((date, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-text-dark text-sm rounded-aproko">
                    {date}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FilterSection = () => {
  return (
    <div className="card-base animate-fade-in">
      <h3 className="font-medium mb-4 flex items-center">
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Specialty</h4>
          <div className="space-y-2">
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              General Practitioner
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Cardiologist
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Pediatrician
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Psychiatrist
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Nutritionist
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Availability</h4>
          <div className="space-y-2">
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Available today
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Available this week
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Weekend availability
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Price Range</h4>
          <div className="space-y-2">
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              ₦5,000 - ₦10,000
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              ₦10,000 - ₦15,000
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              ₦15,000 - ₦20,000
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Above ₦20,000
            </label>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Languages</h4>
          <div className="space-y-2">
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              English
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Yoruba
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Igbo
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              Hausa
            </label>
            <label className="flex items-center text-text-muted text-sm">
              <input type="checkbox" className="mr-2" />
              French
            </label>
          </div>
        </div>
        
        <button className="w-full btn-primary">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

const Consultations = () => {
  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Adebayo Johnson',
      specialty: 'General Practitioner',
      avatar: 'https://i.pravatar.cc/300?img=11',
      rating: 4.8,
      reviewCount: 128,
      available: true,
      availableDates: ['Today, 2:00 PM', 'Today, 4:30 PM', 'Tomorrow, 10:00 AM', 'Tomorrow, 3:00 PM'],
      price: 10000,
      experience: 12,
      languages: ['English', 'Yoruba'],
      education: 'MBBS, University of Lagos, 2010',
      certifications: ['Nigerian Medical Association', 'Royal College of General Practitioners UK'],
    },
    {
      id: 2,
      name: 'Dr. Ngozi Okafor',
      specialty: 'Pediatrician',
      avatar: 'https://i.pravatar.cc/300?img=9',
      rating: 4.9,
      reviewCount: 95,
      available: true,
      availableDates: ['Today, 1:00 PM', 'Today, 5:30 PM', 'Friday, 9:00 AM', 'Saturday, 11:00 AM'],
      price: 15000,
      experience: 8,
      languages: ['English', 'Igbo'],
      education: 'MBBS, University of Nigeria, 2013',
      certifications: ['Nigerian Medical Association', 'American Academy of Pediatrics'],
    },
    {
      id: 3,
      name: 'Dr. Mohammed Ibrahim',
      specialty: 'Cardiologist',
      avatar: 'https://i.pravatar.cc/300?img=12',
      rating: 4.7,
      reviewCount: 76,
      available: false,
      availableDates: ['Friday, 2:00 PM', 'Friday, 4:30 PM', 'Monday, 10:00 AM', 'Tuesday, 3:00 PM'],
      price: 20000,
      experience: 15,
      languages: ['English', 'Hausa', 'Arabic'],
      education: 'MBBS, University of Ibadan, 2007; Cardiology Fellowship, Imperial College London, 2012',
      certifications: ['Nigerian Cardiac Society', 'European Society of Cardiology'],
    },
    {
      id: 4,
      name: 'Dr. Amina Yusuf',
      specialty: 'Nutritionist',
      avatar: 'https://i.pravatar.cc/300?img=10',
      rating: 4.6,
      reviewCount: 62,
      available: true,
      availableDates: ['Today, 3:00 PM', 'Tomorrow, 11:30 AM', 'Saturday, 12:00 PM', 'Monday, 2:00 PM'],
      price: 8000,
      experience: 6,
      languages: ['English', 'Hausa', 'French'],
      education: 'BSc Nutrition, University of Manchester, 2016; MSc Clinical Nutrition, King\'s College London, 2018',
      certifications: ['Nutrition Society of Nigeria', 'International Society of Sports Nutrition'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary-light text-primary text-sm font-medium">
              Virtual Consultations
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Book a Session with Our Verified Doctors
            </h1>
            <p className="text-text-muted max-w-2xl mx-auto">
              Connect with licensed healthcare professionals for virtual consultations. 
              Get personalized medical advice from the comfort of your home.
            </p>
          </div>
          
          <div className="relative mb-8 max-w-xl mx-auto animate-fade-in animate-delay-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by doctor name, specialty, or symptom..."
                className="w-full py-3 pl-5 pr-12 rounded-aproko border border-gray-300 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary text-base"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="h-5 w-5 text-text-muted" />
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <FilterSection />
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultations;
