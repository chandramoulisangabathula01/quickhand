// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/navbar';
// import Footer from '@/components/footer';
// import CookieConsent from '@/components/CookieConsent';

// export default function AboutUs() {
//   return (
//     <div className="bg-white">
//       <Navbar />

//       {/* About Us Content */}
//       <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
//         <div className="text-center mb-12 sm:mb-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-[#cc4c03] bg-clip-text text-transparent">About Servizo</h1>
//           <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Redefining convenience through trusted, professional services</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//           {/* Our Story */}
//           <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cc4c03]">Our Story</h2>
//             <p className="text-gray-600 leading-relaxed">Our journey began with a simple yet powerful idea: to bridge the gap between exceptional service professionals and those seeking quality assistance in their daily lives.</p>
//             <div className="mt-6">
//               <Image 
//                 src="/boardmeeting.jpg" 
//                 alt="Our Story" 
//                 width={500} 
//                 height={300} 
//                 className="rounded-lg w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Our Mission */}
//           <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cc4c03]">Our Mission</h2>
//             <p className="text-gray-600 leading-relaxed">At Servizo, our mission is to empower individuals and families by offering easy access to reliable services. We aim to simplify daily tasks, promote trust and transparency, and enhance lifestyles with personalized, high-quality services.</p>
//             <div className="mt-6">
//               <Image 
//                 src="/handshake.png" 
//                 alt="Our Mission" 
//                 width={500} 
//                 height={300} 
//                 className="rounded-lg w-full h-auto"
//               />
//             </div>
//           </div>

//           {/* Our Values */}
//           <div className="col-span-full bg-gray-200 p-6 sm:p-8 rounded-xl shadow-lg mt-8">
//             <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#cc4c03] text-center">Our Core Values</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//               <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Reliability</h3>
//                 <p className="text-gray-600">Dependable and punctual services you can count on</p>
//               </div>
//               <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Trust</h3>
//                 <p className="text-gray-600">Rigorous screening for all professionals</p>
//               </div>
//               <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Convenience</h3>
//                 <p className="text-gray-600">Seamless booking with our user-friendly platform</p>
//               </div>
//               <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
//                 <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Care</h3>
//                 <p className="text-gray-600">Genuine dedication in every service</p>
//               </div>
//             </div>
//           </div>


//         </div>
//       </section>

//       <Footer />
//       <CookieConsent />
//     </div>
//   );
// }




'use client';

import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
// import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CookieConsent from '@/components/CookieConsent';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}

      {/* About Us Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-[#cc4c03] bg-clip-text text-transparent">About Servizo</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Redefining convenience through trusted, professional services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Our Story */}
          <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cc4c03]">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">Our journey began with a simple yet powerful idea: to bridge the gap between exceptional service professionals and those seeking quality assistance in their daily lives.</p>
            <div className="mt-6">
              <Image 
                src="/images/AiGenimages/chef-pose1.jpeg" 
                alt="Our Story" 
                width={500} 
                height={300} 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#cc4c03]">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">At Servizo, our mission is to empower individuals and families by offering easy access to reliable services. We aim to simplify daily tasks, promote trust and transparency, and enhance lifestyles with personalized, high-quality services.</p>
            <div className="mt-6">
              <Image 
                src="/images/AiGenimages/female-chef.jpeg" 
                alt="Our Mission" 
                width={500} 
                height={300} 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Our Values */}
          <div className="col-span-full bg-gray-200 p-6 sm:p-8 rounded-xl shadow-lg mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#cc4c03] text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Reliability</h3>
                <p className="text-gray-600">Dependable and punctual services you can count on</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Trust</h3>
                <p className="text-gray-600">Rigorous screening for all professionals</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Convenience</h3>
                <p className="text-gray-600">Seamless booking with our user-friendly platform</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Care</h3>
                <p className="text-gray-600">Genuine dedication in every service</p>
              </div>
            </div>
          </div>
        </div> {/* End of grid for Story, Mission, Values */}

        {/* Why Choose Servizo? Section */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#cc4c03]">
              Why Choose Servizo?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing an exceptional service experience. Here’s what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1: Expert Professionals */}
            <div className="bg-gray-50 p-6 py-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#cc4c03] to-orange-500 rounded-full flex items-center justify-center mb-5 text-white text-3xl font-semibold shadow-lg">
                ✓
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Expert Professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                Our service providers are rigorously vetted, highly skilled, and committed to delivering top-quality workmanship.
              </p>
            </div>

            {/* Feature Card 2: Effortless Convenience */}
            <div className="bg-gray-50 p-6 py-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#cc4c03] to-orange-500 rounded-full flex items-center justify-center mb-5 text-white text-3xl font-semibold shadow-lg">
                ✨
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Effortless Convenience</h3>
              <p className="text-gray-600 leading-relaxed">
                Book services in minutes through our user-friendly platform, manage appointments easily, and enjoy transparent pricing.
              </p>
            </div>

            {/* Feature Card 3: Dedicated Support */}
            <div className="bg-gray-50 p-6 py-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#cc4c03] to-orange-500 rounded-full flex items-center justify-center mb-5 text-white text-3xl font-semibold shadow-lg">
                🤝
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. Our responsive customer support team is here to assist you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}
