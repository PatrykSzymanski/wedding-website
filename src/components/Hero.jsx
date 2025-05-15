import React, { useState, useEffect } from 'react';

const Hero = () => {
  const weddingDate = new Date('June 15, 2025 14:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const scrollToRSVP = () => {
    document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h2 className="text-4xl md:text-5xl text-white font-great-vibes mb-4">
          Patryk & Partner
        </h2>
        <h1 className="text-3xl md:text-4xl text-white font-light uppercase tracking-widest mb-6">
          WE'RE GETTING MARRIED
        </h1>
        <div className="text-white mb-8">
          <p className="text-xl md:text-2xl">June 15th, 2025 • San Francisco, CA</p>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          {Object.keys(timeLeft).length > 0 ? (
            Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg py-4 px-2">
                <div className="text-3xl md:text-4xl text-white font-light">{value}</div>
                <div className="text-sm uppercase tracking-wider text-white">{unit}</div>
              </div>
            ))
          ) : (
            <p className="col-span-4 text-2xl text-white">Today is the day!</p>
          )}
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToRSVP}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full text-lg transition-colors uppercase tracking-wider"
        >
          RSVP Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
