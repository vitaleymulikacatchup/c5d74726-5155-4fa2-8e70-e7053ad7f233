import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Store', href: '#' },
    { name: 'Mac', href: '#' },
    { name: 'iPad', href: '#' },
    { name: 'iPhone', href: '#' },
    { name: 'Watch', href: '#' },
    { name: 'Vision', href: '#' },
    { name: 'AirPods', href: '#' },
    { name: 'TV & Home', href: '#' },
    { name: 'Entertainment', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'Support', href: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-md">
      <nav className="apple-container">
        <div className="flex items-center justify-between h-12">
          {/* Apple Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-4 h-5" viewBox="0 0 14 18" fill="currentColor">
                <path d="M12.5 8.5c0-1.4.7-2.7 1.8-3.4-.7-1-1.8-1.6-3-1.6-1.3 0-2.4.8-3 .8s-1.8-.8-3-.8c-2.2 0-4.2 1.8-4.2 5.3 0 2.1.8 4.3 1.8 5.7.9 1.2 1.7 2.2 3 2.2 1.2 0 1.6-.8 3.1-.8 1.5 0 1.8.8 3.1.8 1.3 0 2.2-1.1 3-2.2.6-.8 1-1.7 1.2-2.6-1.3-.6-2.1-1.9-2.1-3.4z" />
                <path d="M8.7 4.5c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.7-.9 1.6-.8 2.6.9 0 1.8-.5 2.4-1.2z" />
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white text-xs font-normal hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <button className="text-white hover:text-gray-300 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-95 backdrop-blur-md absolute top-12 left-0 right-0 border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white text-lg font-normal hover:text-gray-300 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;