import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-20">
        {/* Page Header */}
        <div className="bg-teal-600 dark:bg-teal-700 py-12">
          <Container>
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="max-w-2xl mx-auto text-teal-100">
                Have questions or need assistance? We're here to help. Reach out to our team of real estate experts.
              </p>
            </div>
          </Container>
        </div>

        <Container className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Whether you're looking to buy, sell, or rent a property, our team is ready to assist you every step of the way. Fill out the form or use our contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Our Office</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      123 Property Lane, Real Estate City<br />
                      Zip Code: 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Phone Numbers</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      Main Office: +1 (555) 123-4567<br />
                      Support Line: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Email Addresses</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      General Inquiries: info@realestate.com<br />
                      Support: support@realestate.com
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-900 dark:text-white">Business Hours</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Send Us A Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="property-inquiry">Property Inquiry</option>
                      <option value="selling">Selling My Property</option>
                      <option value="renting">Renting My Property</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agree" className="ml-2 block text-sm text-slate-600 dark:text-slate-300">
                    I agree to the <a href="#" className="text-teal-600 dark:text-teal-400 hover:underline">Privacy Policy</a> and <a href="#" className="text-teal-600 dark:text-teal-400 hover:underline">Terms of Service</a>.
                  </label>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="flex items-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map - In a real app, integrate with Google Maps or similar service */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Our Location
            </h2>
            <div className="bg-slate-200 dark:bg-slate-700 rounded-lg h-96 flex items-center justify-center">
              <p className="text-slate-600 dark:text-slate-300">
                Interactive map would be displayed here
              </p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;