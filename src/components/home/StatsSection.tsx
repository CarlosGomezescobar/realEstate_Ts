import React from 'react';
import { Users, Home, Award, MapPin } from 'lucide-react';
import Container from '../ui/Container';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    value: '5,000+',
    label: 'Happy Clients',
  },
  {
    icon: <Home className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    value: '10,000+',
    label: 'Properties Sold',
  },
  {
    icon: <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    value: '15+',
    label: 'Years of Experience',
  },
  {
    icon: <MapPin className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
    value: '100+',
    label: 'Cities Covered',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="bg-slate-800 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;