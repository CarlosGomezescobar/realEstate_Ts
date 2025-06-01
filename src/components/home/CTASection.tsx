import React from 'react';
import Container from '../ui/Container';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-teal-600 dark:bg-teal-700">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-8 md:mb-0 md:mr-8 md:max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Home?</h2>
            <p className="text-teal-100 mb-6">
              Whether you're looking to buy, sell, or rent a property, our team of expert agents is here to guide you through every step of the process. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="bg-white text-teal-600 hover:bg-slate-100 px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/properties" 
                className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                Browse Properties
              </a>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Request a Callback
            </h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-colors"
              >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;