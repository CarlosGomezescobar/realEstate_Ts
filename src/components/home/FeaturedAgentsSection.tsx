import React from 'react';
import { Phone, Mail, Building } from 'lucide-react';
import Container from '../ui/Container';
import { getFeaturedAgents } from '../../data/agents';

const FeaturedAgentsSection: React.FC = () => {
  const featuredAgents = getFeaturedAgents();

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <Container>
        <div className="text-center mb-12">
          <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">Our Team</p>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Meet Our Expert Agents</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our team of experienced real estate professionals is dedicated to helping you find your dream property or sell your current one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAgents.map((agent) => (
            <div key={agent.id} className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={agent.imageUrl}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {agent.name}
                </h3>
                
                <div className="flex items-center mb-4">
                  <Building className="w-4 h-4 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-slate-600 dark:text-slate-300">{agent.properties} Properties | {agent.experience} Years Exp.</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Phone className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Mail className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" />
                    <span>{agent.email}</span>
                  </div>
                </div>
                
                <a
                  href={`/agent/${agent.id}`}
                  className="inline-block w-full text-center bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a
            href="/agents"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition-colors dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-700 dark:hover:text-white"
          >
            View All Agents
          </a>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedAgentsSection;