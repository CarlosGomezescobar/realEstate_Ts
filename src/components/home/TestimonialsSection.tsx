import React from 'react';
import { Star, Quote } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    id: 1,
    name: 'Jennifer Smith',
    position: 'First-time Homebuyer',
    content: 'Working with RealEstate was a dream come true. They helped me find my first home, and the process was smooth from start to finish. Their knowledge of the market was invaluable.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: 2,
    name: 'Robert Johnson',
    position: 'Property Investor',
    content: 'As a property investor, I\'ve worked with many agencies, but RealEstate stands out. Their market insights and property management services have helped maximize my ROI.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: 3,
    name: 'Maria Garcia',
    position: 'Luxury Home Seller',
    content: 'The team at RealEstate marketed my luxury property perfectly. Their professional photography and targeted marketing strategy attracted the right buyers and got me the best price.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900">
      <Container>
        <div className="text-center mb-12">
          <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What Our Clients Say</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We take pride in providing exceptional service to our clients. Here's what some of them have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200 dark:text-slate-700" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;