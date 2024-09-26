'use client'
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form submitted');
  };

  return (
    <div className="contact-page bg-white text-gray-800">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-primary">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-brand-secondary">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
              </div>
              <button type="submit" className="bg-brand-primary text-white px-6 py-3 rounded-md hover:bg-brand-secondary transition-colors duration-300 font-medium">Send Message</button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-brand-secondary">Contact Information</h2>
            <div className="space-y-4 text-lg">
              <p><span className="font-medium text-brand-primary">Email:</span> info@yourcompany.com</p>
              <p><span className="font-medium text-brand-primary">Phone:</span> +1 (123) 456-7890</p>
              <p><span className="font-medium text-brand-primary">Address:</span> 123 Business St, City, State 12345</p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-brand-secondary">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492404!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1682805705378!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
