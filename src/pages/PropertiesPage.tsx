import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import PropertyCard from '../components/properties/PropertyCard';
import Button from '../components/ui/Button';
import { properties } from '../data/properties';
import { Property } from '../types';

const PropertiesPage: React.FC = () => {
  // Get URL parameters
  const getQueryParam = (param: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Initial filter state from URL if available
  const initialType = getQueryParam('type') as 'sale' | 'rent' | null;

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState({
    type: initialType || 'all',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'any',
    searchTerm: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = [...properties];

    if (filters.type !== 'all') {
      filtered = filtered.filter((property) => property.type === filters.type);
    }

    if (filters.minPrice) {
      filtered = filtered.filter(
        (property) => property.price >= Number(filters.minPrice)
      );
    }

    if (filters.maxPrice) {
      filtered = filtered.filter(
        (property) => property.price <= Number(filters.maxPrice)
      );
    }

    if (filters.bedrooms !== 'any') {
      filtered = filtered.filter(
        (property) => property.bedrooms >= Number(filters.bedrooms)
      );
    }

    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredProperties(filtered);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const clearFilters = () => {
    setFilters({
      type: 'all',
      minPrice: '',
      maxPrice: '',
      bedrooms: 'any',
      searchTerm: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-20">
        <div className="bg-teal-600 dark:bg-teal-700 py-12">
          <Container>
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {filters.type === 'sale' 
                  ? 'Properties For Sale' 
                  : filters.type === 'rent' 
                    ? 'Properties For Rent' 
                    : 'All Properties'}
              </h1>
              <p className="text-teal-100">
                Browse our extensive collection of properties and find your perfect match
              </p>
              
              <div className="mt-8 flex items-center bg-white rounded-lg p-2 shadow-lg">
                <input
                  type="text"
                  name="searchTerm"
                  value={filters.searchTerm}
                  onChange={handleFilterChange}
                  placeholder="Search by location, property name, or features..."
                  className="flex-grow px-4 py-2 text-slate-900 focus:outline-none"
                />
                <Button
                  type="button"
                  onClick={applyFilters}
                  variant="primary"
                  className="ml-2"
                >
                  <Search className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="ml-2 md:hidden"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <Filter className="w-5 h-5 text-slate-700" />
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter sidebar - desktop */}
            <div className="hidden lg:block">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Filters</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Property Type */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Property Type</h4>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setFilters({ ...filters, type: 'all' })}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          filters.type === 'all'
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setFilters({ ...filters, type: 'sale' })}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          filters.type === 'sale'
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        For Sale
                      </button>
                      <button
                        onClick={() => setFilters({ ...filters, type: 'rent' })}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          filters.type === 'rent'
                            ? 'bg-teal-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        For Rent
                      </button>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Price Range</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="number"
                          name="minPrice"
                          value={filters.minPrice}
                          onChange={handleFilterChange}
                          placeholder="Min"
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="maxPrice"
                          value={filters.maxPrice}
                          onChange={handleFilterChange}
                          placeholder="Max"
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bedrooms */}
                  <div>
                    <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Bedrooms</h4>
                    <select
                      name="bedrooms"
                      value={filters.bedrooms}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="any">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>

                  <Button
                    onClick={applyFilters}
                    variant="primary"
                    fullWidth
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Filter sidebar - mobile */}
            {isFilterOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:hidden">
                <div className="bg-white dark:bg-slate-800 p-6 w-80 h-full overflow-auto ml-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Filters</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Property Type */}
                    <div>
                      <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Property Type</h4>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setFilters({ ...filters, type: 'all' })}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            filters.type === 'all'
                              ? 'bg-teal-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => setFilters({ ...filters, type: 'sale' })}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            filters.type === 'sale'
                              ? 'bg-teal-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          For Sale
                        </button>
                        <button
                          onClick={() => setFilters({ ...filters, type: 'rent' })}
                          className={`px-4 py-2 rounded-md text-sm font-medium ${
                            filters.type === 'rent'
                              ? 'bg-teal-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          For Rent
                        </button>
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Price Range</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <input
                            type="number"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handleFilterChange}
                            placeholder="Min"
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handleFilterChange}
                            placeholder="Max"
                            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bedrooms */}
                    <div>
                      <h4 className="text-md font-medium text-slate-900 dark:text-white mb-3">Bedrooms</h4>
                      <select
                        name="bedrooms"
                        value={filters.bedrooms}
                        onChange={handleFilterChange}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="any">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        onClick={clearFilters}
                        variant="outline"
                        className="flex-1"
                      >
                        Clear
                      </Button>
                      <Button
                        onClick={() => {
                          applyFilters();
                          setIsFilterOpen(false);
                        }}
                        variant="primary"
                        className="flex-1"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Properties grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap justify-between items-center mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-3 md:mb-0">
                  Showing <span className="font-medium">{filteredProperties.length}</span> properties
                </p>
                
                <div className="flex items-center">
                  <span className="mr-2 text-slate-600 dark:text-slate-300">Sort by:</span>
                  <select className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>

              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    No Properties Found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Try adjusting your search criteria to find more properties.
                  </p>
                  <Button onClick={clearFilters} variant="primary">
                    Clear Filters
                  </Button>
                </div>
              )}

              {filteredProperties.length > 0 && (
                <div className="mt-10 flex justify-center">
                  <nav className="inline-flex">
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-l-md hover:bg-slate-50 dark:hover:bg-slate-700">
                      Previous
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 border-t border-b border-slate-300 dark:border-slate-600 bg-teal-600 text-white dark:bg-teal-500">
                      1
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 border-t border-b border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700">
                      2
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-white rounded-r-md hover:bg-slate-50 dark:hover:bg-slate-700">
                      Next
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default PropertiesPage;