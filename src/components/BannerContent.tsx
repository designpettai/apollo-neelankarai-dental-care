import React from 'react';

export function BannerContent() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl pt-12 sm:pt-0 ">
        Let Your Smile Shine with Confidence
      </h1>
      <p className="mt-4 text-lg text-gray-600">Expert Care You Can Trust</p>
      <div className="mt-8 max-w-2xl">
        {/* <p className="text-gray-700 leading-relaxed">
          We offer a comprehensive range of specialty-driven dental services...
          Our panel of dentists understands the importance of evidence-based dentistry...
          Aiming to bring world-class dental care in Suchitra, Kompally, Hyderabad...
        </p> */}
        <div className="mb-4 mt-4 bg-[#06789a] p-4 rounded-lg w-full">
          <h2 className="text-2xl font-semibold  text-white">Opening Hours</h2>
          <h4 className="text-lg text-white">Monday - Sunday | 10:00 AM to 8:00 PM</h4>
        </div>
      </div>
    </div>
  );
}
