import React from 'react';
import { Search, MapPin, Building, DollarSign } from 'lucide-react';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="Luxury home"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn">
            Find Your <span className="text-teal-400">Perfect Home</span>
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover the perfect property that matches your lifestyle and preferences
            with our extensive listings and expert guidance.
          </p>

          {/* Search Bar */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 mb-3 lg:mb-0 lg:mr-2">
                <div className="flex items-center bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-md">
                  <MapPin className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="ml-2 w-full bg-transparent focus:outline-none text-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex-1 mb-3 lg:mb-0 lg:mr-2">
                <div className="flex items-center bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-md">
                  <Building className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <select 
                    className="ml-2 w-full bg-transparent focus:outline-none text-slate-900 dark:text-white appearance-none"
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>
              </div>
              <div className="flex-1 mb-3 lg:mb-0 lg:mr-2">
                <div className="flex items-center bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-md">
                  <DollarSign className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                  <select 
                    className="ml-2 w-full bg-transparent focus:outline-none text-slate-900 dark:text-white appearance-none"
                  >
                    <option value="">Price Range</option>
                    <option value="0-100000">$0 - $100,000</option>
                    <option value="100000-300000">$100,000 - $300,000</option>
                    <option value="300000-600000">$300,000 - $600,000</option>
                    <option value="600000-1000000">$600,000 - $1,000,000</option>
                    <option value="1000000+">$1,000,000+</option>
                  </select>
                </div>
              </div>
              <button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md flex items-center justify-center transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm">Properties for Sale</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <p className="text-2xl font-bold">150+</p>
              <p className="text-sm">Properties for Rent</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <p className="text-2xl font-bold">50+</p>
              <p className="text-sm">Expert Agents</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;