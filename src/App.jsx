import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation scrolled={scrolled} />
      <HomePage />
    </div>
  );
}

export default App;
