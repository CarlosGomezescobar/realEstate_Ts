import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Web3Provider } from './context/Web3Context';
import { CartProvider } from './context/CartContext';
import Router from './router';

function App() {
  return (
    <ThemeProvider>
      <Web3Provider>
        <CartProvider>
          <Router />
        </CartProvider>
      </Web3Provider>
    </ThemeProvider>
  );
}

export default App;