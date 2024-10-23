/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboutUsHero: React.FC = () => {
  return (
    <section className="about-hero relative min-h-screen py-10 sm:py-16 md:py-20 bg-gray-100">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center h-full">
          <div className="w-full sm:w-5/6 md:w-2/3 lg:w-1/2 p-6 sm:p-8 md:p-12 flex border-2 border-gray-300 flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center">Our Journey of Innovation</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed text-center text-gray-500">
              Founded in 2020, we set out to redefine convenience in the digital age. Our platform seamlessly connects discerning clients with elite professionals across diverse service domains. By harnessing cutting-edge technology and human expertise, we're crafting an unparalleled platform that anticipates and meets the evolving needs of both service seekers and providers.
            </p>
            {/* <Link href="/our-vision" className="inline-block bg-brand-primary text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-brand-secondary transition-colors duration-300 text-base sm:text-lg">
              Discover Our Vision
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;


