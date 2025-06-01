import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/ui/Container';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I start searching for a property?',
    answer: 'You can start by browsing our listings on the homepage or using the search functionality. Filter properties by location, price range, property type, and other criteria to find exactly what you\'re looking for.',
    category: 'Buying',
  },
  {
    question: 'What documents do I need when buying a property?',
    answer: 'When buying a property, you typically need identification (passport/driver\'s license), proof of income (pay stubs, tax returns), bank statements, proof of funds for the down payment, and pre-approval from a mortgage lender. Additional documents may be required depending on your specific circumstances.',
    category: 'Buying',
  },
  {
    question: 'How long does the buying process usually take?',
    answer: 'The buying process typically takes 30-60 days from offer acceptance to closing, depending on factors like financing approval, property inspection results, and any negotiation periods. Cash purchases can sometimes close more quickly.',
    category: 'Buying',
  },
  {
    question: 'What\'s the difference between pre-qualification and pre-approval?',
    answer: 'Pre-qualification is an informal estimate of how much you might be able to borrow based on self-reported financial information. Pre-approval is more formal and involves verification of your financial information, credit check, and a conditional commitment from a lender for a specific loan amount.',
    category: 'Buying',
  },
  {
    question: 'How much do I need for a down payment?',
    answer: 'Down payment requirements vary based on the type of loan and your financial situation. Conventional loans typically require 5-20% down, while FHA loans may allow as little as 3.5% down. VA and USDA loans might offer zero down payment options for those who qualify.',
    category: 'Buying',
  },
  {
    question: 'What are the steps to selling my property?',
    answer: 'The selling process typically includes preparing your home for sale, setting a competitive price, listing the property, marketing it to potential buyers, reviewing offers, negotiating terms, completing inspections and appraisals, and closing the sale. Our agents can guide you through each step.',
    category: 'Selling',
  },
  {
    question: 'How is my property\'s market value determined?',
    answer: 'Your property\'s market value is determined through a comparative market analysis (CMA), which evaluates recent sales of similar properties in your area, current market conditions, your property\'s location, size, condition, features, and upgrades.',
    category: 'Selling',
  },
  {
    question: 'Should I make repairs before selling my house?',
    answer: 'Making essential repairs can increase your home\'s value and appeal to buyers. Focus on fixing structural issues, leaks, electrical problems, and other functional concerns. Cosmetic improvements like fresh paint and updated fixtures can also provide a good return on investment.',
    category: 'Selling',
  },
  {
    question: 'What fees are involved when selling a property?',
    answer: 'Selling costs typically include agent commissions (5-6% of sale price), closing costs (1-3%), potential repairs identified during inspection, home staging expenses, and possible buyer concessions. Your net proceeds will be the sale price minus your remaining mortgage balance and these selling costs.',
    category: 'Selling',
  },
  {
    question: 'How long will it take to rent out my property?',
    answer: 'The time to rent a property varies based on location, property condition, rental price, and current market demand. In high-demand areas with competitive pricing, properties can rent within days. On average, expect 2-4 weeks from listing to signing a lease.',
    category: 'Renting',
  },
  {
    question: 'What screening process do you use for tenants?',
    answer: 'Our tenant screening process includes credit checks, income verification (typically requiring income of 3x the monthly rent), employment verification, rental history review, background checks, and personal references. This comprehensive approach helps ensure reliable tenants for your property.',
    category: 'Renting',
  },
  {
    question: 'What maintenance am I responsible for as a tenant?',
    answer: 'As a tenant, you\'re typically responsible for routine maintenance like changing air filters, replacing light bulbs, basic cleaning, yard care (unless specified otherwise), and reporting maintenance issues promptly. The landlord generally handles major repairs and building systems maintenance.',
    category: 'Renting',
  },
  {
    question: 'Can I make alterations to a rental property?',
    answer: 'Most rental agreements require landlord approval before making alterations. Minor changes like hanging pictures are usually acceptable, but painting walls, installing fixtures, or making structural changes typically need written permission. Always check your lease agreement and communicate with your landlord.',
    category: 'Renting',
  }
];

const FAQPage: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Buying', 'Selling', 'Renting'];

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-20 pb-16">
        {/* Page Header */}
        <div className="bg-teal-600 dark:bg-teal-700 py-12">
          <Container>
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="max-w-2xl mx-auto text-teal-100">
                Find answers to common questions about buying, selling, and renting properties with our comprehensive FAQ guide.
              </p>
            </div>
          </Container>
        </div>

        <Container className="py-16">
          <div className="max-w-4xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for questions..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <HelpCircle className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                    {openItem === index ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>
                  {openItem === index && (
                    <div className="p-5 pt-0 border-t border-slate-200 dark:border-slate-700">
                      <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-teal-50 dark:bg-teal-900/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xl mx-auto">
                If you couldn't find the answer you were looking for, our team is always ready to help. 
                Get in touch with us for personalized assistance.
              </p>
              <a
                href="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;