import React from 'react';
import { Building, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">RealEstate</span>
            </div>
            <p className="text-slate-300 mb-4">
              Finding your dream property has never been easier. Browse our exclusive listings and connect with our expert agents.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>123 Property Lane, Real Estate City</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+58 (424) 5588898</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>gg.20twenty1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/properties?type=sale" className="text-slate-300 hover:text-teal-400 transition-colors">Buy Property</a></li>
              <li><a href="/properties?type=rent" className="text-slate-300 hover:text-teal-400 transition-colors">Rent Property</a></li>
              <li><a href="/services" className="text-slate-300 hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="/faq" className="text-slate-300 hover:text-teal-400 transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Property Types</h3>
            <ul className="space-y-2">
              <li><a href="/properties?category=apartment" className="text-slate-300 hover:text-teal-400 transition-colors">Apartments</a></li>
              <li><a href="/properties?category=house" className="text-slate-300 hover:text-teal-400 transition-colors">Houses</a></li>
              <li><a href="/properties?category=villa" className="text-slate-300 hover:text-teal-400 transition-colors">Villas</a></li>
              <li><a href="/properties?category=commercial" className="text-slate-300 hover:text-teal-400 transition-colors">Commercial</a></li>
              <li><a href="/properties?category=luxury" className="text-slate-300 hover:text-teal-400 transition-colors">Luxury</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Subscribe</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for the latest property listings and real estate news.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="text-slate-400 text-sm">
              &copy; {currentYear} RealEstate. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;