import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-great-vibes mb-3">Patryk & Partner</h2>
            <p className="text-gray-400">June 15, 2025 • San Francisco</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <button 
                onClick={scrollToTop} 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                aria-label="Scroll to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
            
            <nav>
              <ul className="flex flex-wrap justify-center space-x-4 md:justify-end">
                <li>
                  <button onClick={() => document.getElementById('our-story').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Our Story</button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('events').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Events</button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">RSVP</button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('travel').scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-white transition-colors">Travel</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-4">
            <a 
              href="mailto:patryk.partner@example.com" 
              className="hover:text-gray-300 transition-colors"
            >
              patryk.partner@example.com
            </a>
          </p>
          <p>© {new Date().getFullYear()} • Patryk & Partner Wedding • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
