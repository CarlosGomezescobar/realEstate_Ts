export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // square meters/feet
  imageUrl: string;
  type: 'sale' | 'rent';
  featured: boolean;
  amenities: string[];
  createdAt: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  properties: number;
  experience: number;
}

export type ThemeMode = 'light' | 'dark';