import React from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    imageUrl,
    type,
  } = property;

  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price) + (type === 'rent' ? '/mo' : '');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        {/* Badge for sale/rent */}
        <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-sm font-semibold ${
          type === 'sale' 
            ? 'bg-teal-600 text-white' 
            : 'bg-amber-500 text-white'
        }`}>
          {type === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
        
        {/* Favorite button */}
        <button className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-rose-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        
        {/* Image */}
        <a href={`/property/${id}`} className="block">
          <div className="aspect-[4/3] overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>
      </div>
      
      <div className="p-5">
        <a href={`/property/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            {title}
          </h3>
        </a>
        
        <div className="flex items-center mb-4 text-slate-600 dark:text-slate-400">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-4 text-sm text-slate-700 dark:text-slate-300">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              <span>{area} m²</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="text-teal-600 dark:text-teal-400 font-bold text-lg">
            {formatPrice(price, type)}
          </div>
          <a 
            href={`/property/${id}`}
            className="text-sm font-medium text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;