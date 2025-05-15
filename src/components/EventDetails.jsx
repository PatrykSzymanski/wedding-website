import React from 'react';

const EventCard = ({ icon, title, time, location, address, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
    <div className="text-rose-500 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-center">{title}</h3>
    <div className="text-center mb-4">
      <p className="text-gray-700 font-medium">{time}</p>
      <p className="text-gray-600 font-semibold">{location}</p>
      <p className="text-gray-500 text-sm">{address}</p>
    </div>
    <p className="text-gray-600 text-center">{description}</p>
    
    <div className="mt-6 flex justify-center">
      <a 
        href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-rose-500 hover:text-rose-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        View Map
      </a>
    </div>
  </div>
);

const EventDetails = () => {
  return (
    <div id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Event Details</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Join us for our special day. Here are the details for our wedding ceremony and reception.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <EventCard
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            title="Ceremony"
            time="2:00 PM - 3:30 PM • June 15, 2025"
            location="Grace Cathedral"
            address="1100 California St, San Francisco, CA 94108"
            description="We will exchange our vows surrounded by loved ones in this beautiful historic cathedral. Please arrive 30 minutes early for seating."
          />

          <EventCard
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            }
            title="Reception"
            time="5:00 PM - 11:30 PM • June 15, 2025"
            location="Fairmont San Francisco"
            address="950 Mason St, San Francisco, CA 94108"
            description="Join us for cocktails, dinner, dancing, and celebrating! The evening will include a cocktail hour, seated dinner, and dancing into the night."
          />

          <div className="md:col-span-2 mt-8 bg-rose-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Wedding Day Schedule</h3>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-rose-600 mb-2">Pre-Ceremony</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">1:15 PM</span>
                    <span className="text-gray-600">Shuttle service begins from hotel</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">1:30 PM</span>
                    <span className="text-gray-600">Guests arrive at cathedral</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-rose-600 mb-2">Post-Ceremony</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">4:00 PM</span>
                    <span className="text-gray-600">Shuttle service to reception venue</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">5:00 PM</span>
                    <span className="text-gray-600">Cocktail hour begins</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">6:30 PM</span>
                    <span className="text-gray-600">Dinner service</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">8:00 PM</span>
                    <span className="text-gray-600">Dancing begins</span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 font-medium w-24">11:30 PM</span>
                    <span className="text-gray-600">Reception concludes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 text-gray-600 text-sm font-medium">
              <p>* Dress code: Formal Attire / Black Tie Optional</p>
              <p className="mt-1">* Parking is available at both venues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
