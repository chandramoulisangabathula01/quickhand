/* eslint-disable @next/next/no-img-element */
"use client";
// import Swal from "sweetalert2";
import React, { useState } from "react";
// import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Link from "next/link";

const ContactPage = () => {
  const [formData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });


  return  (
    <>
      
        {/* <Navbar /> */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-100 rounded-3xl shadow-lg overflow-hidden border-2 border-[#cc4c03]">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4 sm:mb-6 inline-block bg-[#cc4c03] px-4 py-1 rounded-lg text-white">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Have a specific inquiry or looking to explore new opportunities?
                Our experienced team is ready to engage with you.
              </p>
              {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
              <form className="space-y-4 sm:space-y-6">

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  // onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border-b-2 border-gray-200 focus:border-[#cc4c03] outline-none transition focus:bg-white/80"
                />
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="Phone No"
                  value={formData.number}
                  // onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border-b-2 border-gray-200 focus:border-[#cc4c03] outline-none transition focus:bg-white/80"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  // onChange={handleInputChange}
                  className="w-full p-3 bg-gray-100 border-b-2 border-gray-200 focus:border-[#cc4c03] outline-none transition focus:bg-white/80"
                />
                <textarea
                  name="message"
                  placeholder="Write Message"
                  required
                  value={formData.message}
                  // onChange={handleInputChange}
                  className="w-full p-3 border-b-2 bg-gray-100 border-gray-200 focus:border-[#cc4c03] outline-none transition focus:bg-white/80"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#cc4c03] hover:bg-black text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center border-2 border-[#cc4c03]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  Send Message
                </button>
              </form>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <a
                  href="mailto:info@sangeetasystems.com"
                  className="flex items-center text-black hover:text-[#cc4c03] hover:underline transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@Company.com
                </a>
                <a
                  href="tel:+917396691030"
                  className="flex items-center text-black hover:text-[#cc4c03] hover:underline transition-colors duration-300"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +1234567890
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
                
              
                  {/* <img src="/images/caregiver.png" alt="Map" className="object-contain top-20 h-[500px] w-full" /> */}
              <img src="/images/contact/contactimagewebp.webp" alt="Caregiver" className="object-contain top-20 h-[400px] sm:h-[500px] w-full" />
                
              
            </div>
          </div>
        </div>
        <div id='download'>.</div>

        
        <Footer />
     
    </>
  );
};

export default ContactPage;
