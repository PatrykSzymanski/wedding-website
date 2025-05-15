import React from 'react';

const TimelineItem = ({ date, title, description, imageSrc, isLeft }) => (
  <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-16 items-center`}>
    {/* Image */}
    <div className="w-full md:w-5/12">
      <div className="relative p-4">
        <div className="bg-rose-100 rounded-lg p-2">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-64 object-cover rounded"
          />
        </div>
      </div>
    </div>

    {/* Line & Circle */}
    <div className="hidden md:flex flex-col items-center w-2/12">
      <div className={`w-px h-full bg-rose-300 ${isLeft ? 'mr-6' : 'ml-6'}`}></div>
      <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

    {/* Content */}
    <div className="w-full md:w-5/12">
      <div className={`p-4 ${isLeft ? 'text-left' : 'text-right'}`}>
        <span className="text-rose-500 text-sm uppercase tracking-widest">{date}</span>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const OurStory = () => {
  const timelineEvents = [
    {
      date: 'May 2020',
      title: 'First Meeting',
      description: 'We met through mutual friends at a summer barbecue. What started as casual conversation quickly turned into hours of talking and laughter.',
      imageSrc: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      date: 'October 2020',
      title: 'First Date',
      description: 'Our first official date was at a quaint coffee shop downtown, which turned into a walk in the park and dinner under the stars. We knew there was something special from the start.',
      imageSrc: 'https://images.unsplash.com/photo-1543169108-32ac15a21e05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    },
    {
      date: 'March 2022',
      title: 'Moving In Together',
      description: 'After a year and a half of dating, we decided to take the next step in our relationship by moving in together. Our little apartment quickly became our cozy home.',
      imageSrc: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
    {
      date: 'December 2023',
      title: 'The Proposal',
      description: 'During a surprise weekend getaway to the mountains, surrounded by fresh snow and twinkling lights, the proposal happened at sunset. It was perfect and the answer was, of course, YES!',
      imageSrc: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    },
  ];

  return (
    <div id="our-story" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            From the moment we met to the day we said "yes" to forever, 
            here's a glimpse into our journey of love and happiness.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              date={event.date}
              title={event.title}
              description={event.description}
              imageSrc={event.imageSrc}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;
