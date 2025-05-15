import React, { useState } from 'react';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    attending: 'yes',
    guests: '0',
    dietaryRestrictions: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear any validation errors when user starts typing again
    if (validationError) {
      setValidationError('');
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      setValidationError('Please fill in all required fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would typically send this data to your backend
    // Simulating a server request with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        attending: 'yes',
        guests: '0',
        dietaryRestrictions: '',
        message: ''
      });
      
      // After 5 seconds, reset the submission message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div id="rsvp" className="py-24 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">RSVP</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Please let us know if you can make it to our special day.
            <br />
            <span className="font-semibold">RSVP by May 15, 2025</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-10">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your RSVP has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {validationError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 text-red-700">
                  <p>{validationError}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="attending" className="block text-gray-700 font-medium mb-2">
                    Will you be attending?
                  </label>
                  <select
                    id="attending"
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                  >
                    <option value="yes">Yes, I will attend</option>
                    <option value="no">No, I cannot attend</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={formData.attending === 'no'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    <option value="0">Just myself</option>
                    <option value="1">Myself and 1 guest</option>
                    <option value="2">Myself and 2 guests</option>
                    <option value="3">Myself and 3 guests</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="dietaryRestrictions" className="block text-gray-700 font-medium mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <input
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  placeholder="Please list any dietary restrictions or allergies"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message for the couple"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-500 transition-colors"
                ></textarea>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-rose-500 hover:bg-rose-600 text-white py-3 px-8 rounded-md font-medium transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit RSVP'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
