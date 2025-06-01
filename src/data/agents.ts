import { Agent } from '../types';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@realestate.com',
    phone: '+1 (555) 123-4567',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    properties: 32,
    experience: 8
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael.chen@realestate.com',
    phone: '+1 (555) 987-6543',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    properties: 24,
    experience: 5
  },
  {
    id: '3',
    name: 'Jessica Rodriguez',
    email: 'jessica.rodriguez@realestate.com',
    phone: '+1 (555) 456-7890',
    imageUrl: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
    properties: 45,
    experience: 12
  },
  {
    id: '4',
    name: 'David Williams',
    email: 'david.williams@realestate.com',
    phone: '+1 (555) 234-5678',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    properties: 18,
    experience: 3
  }
];

export const getFeaturedAgents = (): Agent[] => {
  return agents.slice(0, 3); // Return the first 3 agents as featured
};

export const getAgentById = (id: string): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};