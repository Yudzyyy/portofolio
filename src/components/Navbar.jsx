import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '../data/portfolioData';

const Navbar = ({ scrollToSection, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = (id) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollClick(item.id)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;