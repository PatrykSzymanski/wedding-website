import React from 'react';

const RegistryCard = ({ logo, name, description, linkUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
    <div className="p-6 text-center">
      <div className="h-16 flex items-center justify-center mb-4">
        {logo}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a 
        href={linkUrl} 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-md transition-colors"
      >
        View Registry
      </a>
    </div>
  </div>
);

const Registry = () => {
  const registries = [
    {
      name: "Amazon",
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="64" height="64" fill="#FF9900">
          <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 6.5 13 13.6 19.5 21.1 12.2-21.1 20.2-41 20.2-67.8 0-82.1-36.1-117.5-53.7-114zm-58.2 12.8c7.1 0 12.8 5.7 12.8 12.8 0 7.1-5.7 12.8-12.8 12.8-7.1 0-12.8-5.7-12.8-12.8 0-7.1 5.7-12.8 12.8-12.8zm72.8 315c-12 0-24-5.1-24-12.8 0-7.7 12-13.9 24-13.9s24 6.1 24 13.9c0 7.6-12 12.8-24 12.8z"/>
          <path d="M357.2 235.6c-44.1 0-85.3 20.4-112.9 54.1-11.3-11.5-22.3-22.7-31.5-31-16.1-14.8-27.6-21.8-45.3-23.6-19.3-2-66.9 0-111.7 10.9-5 1.2-8.1 6.4-6.9 11.4 1.2 5 6.4 8.1 11.4 6.9 40.1-9.9 82.2-11.6 97.3-10.1 10 .9 16.1 4.8 28.6 16.3 10.3 9.4 21.8 21.1 34.6 34.5-30.1 40.1-48.1 89.5-48.1 143.4 0 9.7 7.9 17.6 17.6 17.6s17.6-7.9 17.6-17.6c0-46.2 15.9-89 42.5-122.9 68.6-67.4 140.7-67.9 157.1-65.9 23.5 3 41.7 10.8 53.2 23 13.4 13.9 16.1 33.4 8.1 57.8-18.2 56.2-90.2 93.1-154.8 80.2-5.1-.9-9.9 2.4-11 7.4-1.1 5 1.9 10.1 6.9 11.3 14.5 3.8 29.3 5.7 43.9 5.7 65.4 0 122.4-33.9 140.7-88.3 10.5-31.6 6.5-59.1-11.6-78.1-17.2-18.1-44.3-29-78.8-32.9-9.1-.9-23.8-.2-54 9.2z"/>
        </svg>
      ),
      description: "Browse our handpicked selection of home essentials and more.",
      linkUrl: "https://www.amazon.com/wedding/registry"
    },
    {
      name: "Crate & Barrel",
      logo: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="44" height="44" rx="2" fill="#FFFFFF"/>
          <path d="M15 32C15 22.6112 22.6112 15 32 15C41.3888 15 49 22.6112 49 32C49 41.3888 41.3888 49 32 49C22.6112 49 15 41.3888 15 32Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2"/>
          <path d="M22 32L42 32" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
          <path d="M32 22L32 42" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: "Quality kitchenware, furniture, and decor for our new home together.",
      linkUrl: "https://www.crateandbarrel.com/gift-registry/"
    },
    {
      name: "Honeymoon Fund",
      logo: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" fill="#FFFFFF" stroke="#6B46C1" strokeWidth="2"/>
          <path d="M32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C27.5817 24 24 27.5817 24 32C24 36.4183 27.5817 40 32 40Z" fill="#FFFFFF" stroke="#6B46C1" strokeWidth="2"/>
          <path d="M32 28L32 32L36 32" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27 17L36 20" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M47 27L44 20" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M47 37L40 40" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M27 47L24 40" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 37L20 30" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M17 27L24 24" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      description: "Help us create unforgettable memories on our dream honeymoon.",
      linkUrl: "https://www.honeyfund.com"
    }
  ];

  return (
    <div id="registry" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Gift Registry</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
            we've registered at the following places:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {registries.map((registry, index) => (
            <RegistryCard 
              key={index}
              logo={registry.logo}
              name={registry.name}
              description={registry.description}
              linkUrl={registry.linkUrl}
            />
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-8 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">A note about gifts</h3>
            <p className="text-gray-600">
              While we're excited to celebrate our special day with you, please know that your presence is truly what matters most to us. 
              If you choose to give a gift, we are grateful for your generosity and thoughtfulness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
