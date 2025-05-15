import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import RSVPForm from './components/RSVPForm';
import Gallery from './components/Gallery';
import Registry from './components/Registry';
import Travel from './components/Travel';
import Footer from './components/Footer';

const HomePage = () => (
  <div className="font-sans">
    <Hero />
    <OurStory />
    <EventDetails />
    <Gallery />
    <RSVPForm />
    <Registry />
    <Travel />
    <Footer />
  </div>
);

export default HomePage;
