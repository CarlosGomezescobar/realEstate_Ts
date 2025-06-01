import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedProperties from '../components/properties/FeaturedProperties';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeaturedAgentsSection from '../components/home/FeaturedAgentsSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <ServicesSection />
        <StatsSection />
        <FeaturedAgentsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;