import React from 'react';
import { Home, Building, Briefcase, Users, ChevronRight } from 'lucide-react';
import Container from '../ui/Container';

const services = [
  {
    icon: <Home className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    title: 'Property Sales',
    description: 'We help you find the perfect property to buy that meets all your requirements and budget.',
    link: '/services#sales'
  },
  {
    icon: <Building className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    title: 'Rental Services',
    description: 'Find your ideal rental property or let us handle the rental of your investment property.',
    link: '/services#rentals'
  },
  {
    icon: <Briefcase className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    title: 'Property Management',
    description: 'Professional management services for property owners to maximize their investment return.',
    link: '/services#management'
  },
  {
    icon: <Users className="w-10 h-10 text-teal-600 dark:text-teal-400" />,
    title: 'Expert Consultation',
    description: 'Get expert advice from our professional agents on property investments and market trends.',
    link: '/services#consultation'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <Container>
        <div className="text-center mb-12">
          <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Our Services</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How We Can Help You</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We offer a comprehensive range of real estate services designed to make your property journey smooth and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors"
              >
                Learn more
                <ChevronRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;