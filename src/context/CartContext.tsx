import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property } from '../types';

interface CartItem {
  property: Property;
  type: 'purchase' | 'rent';
  duration?: number; // For rentals: number of months
}

interface CartContextType {
  items: CartItem[];
  addToCart: (property: Property, type: 'purchase' | 'rent', duration?: number) => void;
  removeFromCart: (propertyId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (property: Property, type: 'purchase' | 'rent', duration?: number) => {
    setItems((currentItems) => {
      // Check if property already exists in cart
      const exists = currentItems.find(item => item.property.id === property.id);
      if (exists) {
        return currentItems;
      }
      return [...currentItems, { property, type, duration }];
    });
  };

  const removeFromCart = (propertyId: string) => {
    setItems(currentItems => currentItems.filter(item => item.property.id !== propertyId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => {
      if (item.type === 'purchase') {
        return total + item.property.price;
      } else {
        // For rentals, multiply by duration (default to 1 month)
        return total + (item.property.price * (item.duration || 1));
      }
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      clearCart,
      getTotal,
      itemCount: items.length,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};