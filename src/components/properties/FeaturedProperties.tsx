import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import PropertyCard from './PropertyCard';
import { getFeaturedProperties } from '../../data/properties';

const FeaturedProperties: React.FC = () => {
  const featuredProperties = getFeaturedProperties();

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Featured Properties</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Discover Our Premium Listings</h2>
          </div>
          <a
            href="/properties"
            className="flex items-center text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 mt-4 md:mt-0"
          >
            View All Properties
            <ArrowRight className="ml-1 w-5 h-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProperties;