import React from 'react';

const InfoCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-start">
      <div className="text-rose-500 mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <div className="text-gray-700 space-y-2">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const HotelCard = ({ name, address, phone, description, priceRange, bookingCode, websiteUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-500 text-sm mb-1">{address}</p>
      <p className="text-gray-500 text-sm mb-4">{phone}</p>
      <div className="mb-4">
        <span className="text-gray-700 font-medium">Price Range: </span>
        <span className="text-gray-600">{priceRange}</span>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      {bookingCode && (
        <div className="bg-gray-50 p-3 mb-4 rounded">
          <p className="text-sm">
            <span className="font-medium">Group Booking Code: </span>
            <span className="bg-gray-200 px-2 py-1 rounded">{bookingCode}</span>
          </p>
        </div>
      )}
      <div className="text-center mt-4">
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white py-2 px-6 rounded transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
);

const Travel = () => {
  const hotels = [
    {
      name: "Fairmont San Francisco",
      address: "950 Mason St, San Francisco, CA 94108",
      phone: "(415) 772-5000",
      priceRange: "$$$",
      description: "Our primary hotel and reception venue. We've arranged a special rate for our wedding guests. Elegant rooms with stunning city views.",
      bookingCode: "WEDDINGNAME2025",
      websiteUrl: "https://www.fairmont.com/san-francisco/"
    },
    {
      name: "Hotel Nikko",
      address: "222 Mason St, San Francisco, CA 94102",
      phone: "(415) 394-1111",
      priceRange: "$$",
      description: "A modern hotel located near Union Square, just a short ride to our venue. Contemporary design with Japanese-inspired touches.",
      bookingCode: "PATRYK2025",
      websiteUrl: "https://www.hotelnikkosf.com/"
    },
    {
      name: "The Marker San Francisco",
      address: "501 Geary St, San Francisco, CA 94102",
      phone: "(415) 292-0100",
      priceRange: "$$",
      description: "A boutique hotel with a blend of historic charm and modern amenities. Located in the vibrant Theater District.",
      websiteUrl: "https://www.themarkersanfrancisco.com/"
    }
  ];

  return (
    <div id="travel" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Travel & Accommodations</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We've gathered some information to help you plan your trip to San Francisco for our wedding.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Getting Here"
            >
              <p><strong>From San Francisco International Airport (SFO):</strong></p>
              <p>The airport is approximately 13 miles from downtown San Francisco.</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Taxi: ~$45-65 (30-45 minutes)</li>
                <li>Ride Share (Uber/Lyft): ~$35-50 (30-45 minutes)</li>
                <li>BART Train: ~$10 (30 minutes to downtown + walk/taxi to hotel)</li>
              </ul>
              
              <p className="mt-3"><strong>From Oakland International Airport (OAK):</strong></p>
              <p>Oakland Airport is about 20 miles from San Francisco.</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Taxi: ~$60-80 (35-55 minutes)</li>
                <li>Ride Share: ~$45-65 (35-55 minutes)</li>
                <li>BART Train: ~$11 (40 minutes to downtown + walk/taxi to hotel)</li>
              </ul>
            </InfoCard>

            <InfoCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Wedding Weekend Schedule"
            >
              <div className="mb-3">
                <p className="font-medium">Friday, June 14, 2025</p>
                <p>7:00 PM - 9:30 PM: Welcome Cocktail Reception</p>
                <p className="text-sm text-gray-500">Fairmont San Francisco, Crown Room</p>
                <p className="text-sm text-gray-500">Business Casual Attire</p>
              </div>
              
              <div className="mb-3">
                <p className="font-medium">Saturday, June 15, 2025</p>
                <p>2:00 PM - 3:30 PM: Wedding Ceremony</p>
                <p className="text-sm text-gray-500">Grace Cathedral</p>
                <p>5:00 PM - 11:30 PM: Wedding Reception</p>
                <p className="text-sm text-gray-500">Fairmont San Francisco, Gold Room</p>
                <p className="text-sm text-gray-500">Formal Attire / Black Tie Optional</p>
              </div>
              
              <div>
                <p className="font-medium">Sunday, June 16, 2025</p>
                <p>10:30 AM - 1:00 PM: Farewell Brunch</p>
                <p className="text-sm text-gray-500">Fairmont San Francisco, Garden Room</p>
                <p className="text-sm text-gray-500">Casual Attire</p>
              </div>
            </InfoCard>
          </div>

          <h3 className="text-2xl font-semibold mb-6">Recommended Accommodations</h3>
          <p className="text-gray-600 mb-8">We've blocked rooms at the following hotels for our wedding guests. Please book by May 1, 2025 to ensure availability and receive our group rate.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                name={hotel.name}
                address={hotel.address}
                phone={hotel.phone}
                description={hotel.description}
                priceRange={hotel.priceRange}
                bookingCode={hotel.bookingCode}
                websiteUrl={hotel.websiteUrl}
              />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Things to Do in San Francisco</h3>
            <p className="text-gray-600 mb-6">
              We hope you'll take some time to explore the beautiful city of San Francisco during your stay. 
              Here are some of our favorite places and activities:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-rose-500 mb-2">Landmarks & Attractions</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Golden Gate Bridge</li>
                  <li>• Alcatraz Island</li>
                  <li>• Fisherman's Wharf</li>
                  <li>• Lombard Street</li>
                  <li>• Golden Gate Park</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-rose-500 mb-2">Our Favorite Restaurants</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Acquerello (Italian)</li>
                  <li>• Liholiho Yacht Club (Hawaiian)</li>
                  <li>• La Taqueria (Mexican)</li>
                  <li>• House of Prime Rib</li>
                  <li>• Tartine Bakery</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-rose-500 mb-2">Local Experiences</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Ferry Building Marketplace</li>
                  <li>• Bike across the Golden Gate Bridge</li>
                  <li>• Cable Car ride</li>
                  <li>• Muir Woods National Monument</li>
                  <li>• Wine tasting in Napa/Sonoma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
