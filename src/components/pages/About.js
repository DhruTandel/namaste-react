import React, { useState } from 'react';

const AboutUs = () => {

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">About Us</h2>
        <p className="mt-4 text-lg text-gray-500">
          Hum ek passionate team hain jo technology aur innovation ke zariye duniya ko behtar banana chahte hain.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Team Member"
          />
          <h3 className="mt-4 text-xl font-medium text-gray-900">Dhru Tandel
          </h3>
          <p className="mt-2 text-base text-gray-500">CEO & Founder</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Team Member"
          />
          <h3 className="mt-4 text-xl font-medium text-gray-900">Mohit Patel</h3>
          <p className="mt-2 text-base text-gray-500">Lead Developer</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Team Member"
          />
          <h3 className="mt-4 text-xl font-medium text-gray-900">Malay Patel</h3>
          <p className="mt-2 text-base text-gray-500">Designer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
