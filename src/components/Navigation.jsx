import React, { useState } from 'react';

const Navigation = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`text-2xl font-great-vibes ${scrolled ? 'text-rose-500' : 'text-white'}`}>
          Patryk & Partner
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['our-story', 'events', 'gallery', 'rsvp', 'registry', 'travel'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`font-medium hover:text-rose-400 transition-colors ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-slideDown">
            <div className="flex flex-col space-y-4">
              {['our-story', 'events', 'gallery', 'rsvp', 'registry', 'travel'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-800 hover:text-rose-500 transition-colors text-left p-2"
                >
                  {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
