import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Home, Building, DollarSign, PenSquare, Phone, LogOut } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useWeb3 } from '../../context/Web3Context';
import Button from '../ui/Button';
import Container from '../ui/Container';
import SignInModal from '../auth/SignInModal';
import LoginModal from '../auth/LoginModal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { account, isConnected, connectWallet, disconnectWallet } = useWeb3();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-4 h-4 mr-1" /> },
    { name: 'Buy', href: '/properties?type=sale', icon: <Building className="w-4 h-4 mr-1" /> },
    { name: 'Rent', href: '/properties?type=rent', icon: <DollarSign className="w-4 h-4 mr-1" /> },
    { name: 'Services', href: '/services', icon: <PenSquare className="w-4 h-4 mr-1" /> },
    { name: 'Contact', href: '/contact', icon: <Phone className="w-4 h-4 mr-1" /> },
  ];

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-slate-900 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Building className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">RealEstate</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-slate-700 hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-400 font-medium transition-colors"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-4">
              {isConnected ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {shortenAddress(account!)}
                  </span>
                  <Button
                    variant="outline"
                    onClick={disconnectWallet}
                    className="flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Disconnect
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setIsLoginModalOpen(true)}>
                    Login
                  </Button>
                  <Button variant="primary" onClick={() => setIsSignInModalOpen(true)}>
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <Container>
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 rounded-md font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              ))}
              {isConnected ? (
                <div className="px-4 pt-2 space-y-2">
                  <div className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                    Connected: {shortenAddress(account!)}
                  </div>
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={disconnectWallet}
                    className="flex items-center justify-center"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Disconnect
                  </Button>
                </div>
              ) : (
                <div className="px-4 pt-2 space-y-2">
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => {
                      setIsSignInModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </div>
      )}

      {/* Auth Modals */}
      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </header>
  );
};

export default Navbar;