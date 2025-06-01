import React from 'react';
import { Home, Building, Briefcase, Users, BarChart, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const services = [
  {
    id: 'sales',
    title: 'Property Sales',
    description: 'We help you find the perfect property to buy that meets all your requirements and budget.',
    icon: <Home className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
    features: [
      'Personalized property matching',
      'Virtual tours and in-person viewings',
      'Negotiation support for the best price',
      'Assistance with paperwork and closing',
      'Market analysis and property valuation',
      'Post-sale support and guidance'
    ]
  },
  {
    id: 'rentals',
    title: 'Rental Services',
    description: 'Find your ideal rental property or let us handle the rental of your investment property.',
    icon: <Building className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
    features: [
      'Tenant screening and selection',
      'Lease preparation and signing',
      'Rent collection and financial reporting',
      'Property listing and marketing',
      'Maintenance coordination',
      'Regular property inspections'
    ]
  },
  {
    id: 'management',
    title: 'Property Management',
    description: 'Professional management services for property owners to maximize their investment return.',
    icon: <Briefcase className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
    features: [
      'Comprehensive tenant management',
      'Regular property maintenance',
      'Financial reporting and accounting',
      'Legal compliance and documentation',
      'Emergency response services',
      'Vacancy marketing and filling'
    ]
  },
  {
    id: 'consultation',
    title: 'Expert Consultation',
    description: 'Get expert advice from our professional agents on property investments and market trends.',
    icon: <Users className="w-12 h-12 text-teal-600 dark:text-teal-400" />,
    features: [
      'Investment strategy development',
      'Market trend analysis and forecasting',
      'Property portfolio evaluation',
      'ROI optimization guidance',
      'Risk assessment and mitigation',
      'Tax and regulatory advice'
    ]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-teal-600 dark:bg-teal-700 py-12">
          <Container>
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
              <p className="max-w-2xl mx-auto text-teal-100">
                Comprehensive real estate solutions tailored to your needs. Discover how we can help you achieve your property goals.
              </p>
            </div>
          </Container>
        </div>

        {/* Services Overview */}
        <section className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Complete Real Estate Solutions
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  At RealEstate, we offer a comprehensive range of services designed to make your property journey smooth and successful. Whether you're buying, selling, renting, or investing, our expert team is here to guide you every step of the way.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  With years of industry experience and deep local market knowledge, we provide personalized solutions that meet your unique needs and help you achieve your real estate goals.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <span className="text-slate-700 dark:text-slate-200">Personalized Service</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <span className="text-slate-700 dark:text-slate-200">Market Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <span className="text-slate-700 dark:text-slate-200">Transparent Process</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                    <span className="text-slate-700 dark:text-slate-200">Dedicated Support</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
                  alt="Real estate team"
                  className="rounded-lg shadow-lg max-h-80 object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={`#${service.id}`}
                    className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Detailed Service Sections */}
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 ${
              service.id === 'rentals' || service.id === 'consultation'
                ? 'bg-white dark:bg-slate-800'
                : 'bg-slate-50 dark:bg-slate-900'
            }`}
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={service.id === 'rentals' || service.id === 'consultation' ? 'order-2' : ''}>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Our Services</p>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-8">
                    {service.description} Our team of experienced professionals is dedicated to providing exceptional service and achieving the best possible outcomes for our clients.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="primary">
                    Get Started
                  </Button>
                </div>
                
                <div className={service.id === 'rentals' || service.id === 'consultation' ? 'order-1' : ''}>
                  <img
                    src={`https://images.pexels.com/photos/${
                      service.id === 'sales' ? '1546166' : 
                      service.id === 'rentals' ? '1571460' :
                      service.id === 'management' ? '3184291' :
                      '3184405'
                    }/pexels-photo-${
                      service.id === 'sales' ? '1546166' : 
                      service.id === 'rentals' ? '1571460' :
                      service.id === 'management' ? '3184291' :
                      '3184405'
                    }.jpeg`}
                    alt={service.title}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </Container>
          </section>
        ))}

        {/* Why Choose Us */}
        <section className="py-16 bg-slate-900">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Us
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Our dedication to excellence and client satisfaction sets us apart in the real estate industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-teal-600/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Trust & Reliability</h3>
                <p className="text-slate-300">
                  Our reputation is built on trust, transparency, and delivering on our promises to clients.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-teal-600/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-slate-300">
                  Our licensed professionals have years of experience and deep knowledge of the real estate market.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-teal-600/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Market Insights</h3>
                <p className="text-slate-300">
                  We provide data-driven insights to help you make informed decisions about your property.
                </p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-teal-600/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Clock className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
                <p className="text-slate-300">
                  Our team is available to assist you every step of the way, ensuring a smooth experience.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                Contact our team today to learn more about our services and how we can help you with your real estate needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary">
                  Contact Us
                </Button>
                <Button variant="outline">
                  Browse Properties
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;