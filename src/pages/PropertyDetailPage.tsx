import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Calendar, Share2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getPropertyById } from '../data/properties';
import { Property } from '../types';

const PropertyDetailPage: React.FC = () => {
  const [property, setProperty] = useState<Property | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  
  // In a real app, we would get the ID from the URL using a router
  // For this demo, we'll use a hardcoded ID
  const propertyId = '1';

  useEffect(() => {
    // Simulate loading from an API
    setTimeout(() => {
      const foundProperty = getPropertyById(propertyId);
      setProperty(foundProperty);
      setLoading(false);
    }, 500);
  }, [propertyId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <Container className="pt-24 pb-16">
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navbar />
        <Container className="pt-24 pb-16">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Property Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-8">The property you are looking for might have been removed or is temporarily unavailable.</p>
            <Button variant="primary" onClick={() => window.location.href = '/properties'}>
              Browse Properties
            </Button>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number, type: 'sale' | 'rent') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price) + (type === 'rent' ? '/mo' : '');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-20 pb-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <p className="text-teal-600 dark:text-teal-400 font-medium mb-1">
                {property.type === 'sale' ? 'For Sale' : 'For Rent'}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                {property.title}
              </h1>
              <div className="flex items-center mt-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 mr-1 text-slate-400" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col items-end">
              <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">
                {formatPrice(property.price, property.type)}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                <Calendar className="w-4 h-4 inline mr-1" />
                Listed on {formatDate(property.createdAt)}
              </div>
            </div>
          </div>

          {/* Property Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2 lg:row-span-2">
              <img 
                src={property.imageUrl} 
                alt={property.title} 
                className="w-full h-full object-cover rounded-lg"
                style={{ height: '500px' }}
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg" 
                alt="Property interior" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                alt="Property interior" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Property Features */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Bed className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-2" />
                    <span className="text-slate-900 dark:text-white font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Bath className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-2" />
                    <span className="text-slate-900 dark:text-white font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Square className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-2" />
                    <span className="text-slate-900 dark:text-white font-medium">{property.area} m²</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <Calendar className="w-6 h-6 text-teal-600 dark:text-teal-400 mb-2" />
                    <span className="text-slate-900 dark:text-white font-medium">Built 2018</span>
                  </div>
                </div>
                
                {/* Tabs */}
                <div className="border-b border-slate-200 dark:border-slate-700 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('description')}
                      className={`py-3 font-medium border-b-2 ${
                        activeTab === 'description'
                          ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                          : 'border-transparent text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
                      }`}
                    >
                      Description
                    </button>
                    <button
                      onClick={() => setActiveTab('features')}
                      className={`py-3 font-medium border-b-2 ${
                        activeTab === 'features'
                          ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                          : 'border-transparent text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
                      }`}
                    >
                      Features & Amenities
                    </button>
                    <button
                      onClick={() => setActiveTab('location')}
                      className={`py-3 font-medium border-b-2 ${
                        activeTab === 'location'
                          ? 'border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                          : 'border-transparent text-slate-600 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
                      }`}
                    >
                      Location
                    </button>
                  </nav>
                </div>
                
                {/* Tab Content */}
                <div>
                  {activeTab === 'description' && (
                    <div className="text-slate-700 dark:text-slate-300 space-y-4">
                      <p>{property.description}</p>
                      <p>
                        This exceptional property offers a perfect blend of comfort and style. Nestled in a prime location, 
                        it provides easy access to schools, shopping centers, and public transportation. The spacious layout 
                        and quality finishes make this property a must-see for anyone searching for their dream home.
                      </p>
                      <p>
                        Recent renovations include updated kitchen appliances, new flooring throughout the main level, and 
                        a professionally landscaped yard. Don't miss the opportunity to make this remarkable property your own.
                      </p>
                    </div>
                  )}
                  
                  {activeTab === 'features' && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Property Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {property.amenities.map((amenity, index) => (
                          <div 
                            key={index} 
                            className="flex items-center p-3 bg-slate-50 dark:bg-slate-700 rounded-lg"
                          >
                            <div className="w-2 h-2 rounded-full bg-teal-600 dark:bg-teal-400 mr-2"></div>
                            <span className="text-slate-700 dark:text-slate-300">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'location' && (
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Property Location</h3>
                      <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-80 flex items-center justify-center mb-4">
                        <p className="text-slate-600 dark:text-slate-300">
                          Interactive map would be displayed here
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">Neighborhood</h4>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          Located in a peaceful residential area with easy access to amenities. The neighborhood features 
                          tree-lined streets, local parks, and a strong sense of community.
                        </p>
                        
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">Nearby Amenities</h4>
                        <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                          <li>Schools: Jefferson Elementary (0.5 mi), Washington High School (1.2 mi)</li>
                          <li>Shopping: Central Mall (1.5 mi), Grocery Store (0.8 mi)</li>
                          <li>Recreation: Community Park (0.3 mi), Public Library (1.0 mi)</li>
                          <li>Transportation: Bus Stop (0.2 mi), Train Station (2.0 mi)</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Contact Agent */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                    alt="Agent profile"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">Sarah Johnson</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-teal-600 dark:text-teal-400">★★★★★</span> 5.0 (42 reviews)
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Licensed Agent</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      defaultValue={`Hi, I'm interested in ${property.title}. Please provide more information.`}
                    ></textarea>
                  </div>
                  <div>
                    <Button variant="primary" fullWidth>
                      Contact Agent
                    </Button>
                  </div>
                </form>
              </div>

              {/* Action buttons */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="flex items-center justify-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Mortgage Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Home Price
                    </label>
                    <input
                      type="text"
                      value={`$${property.price.toLocaleString()}`}
                      readOnly
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Down Payment (20%)
                    </label>
                    <input
                      type="text"
                      value={`$${Math.round(property.price * 0.2).toLocaleString()}`}
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Loan Term
                    </label>
                    <select 
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>30 years</option>
                      <option>15 years</option>
                      <option>10 years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Interest Rate
                    </label>
                    <input
                      type="text"
                      defaultValue="4.5%"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-700 dark:text-slate-300">Monthly Payment:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">$3,800</span>
                    </div>
                    <Button variant="primary" fullWidth>
                      Get Pre-Approved
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;