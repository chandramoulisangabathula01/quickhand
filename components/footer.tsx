import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    // <footer className="bg-black text-white py-12 border-t-4 border-[#cc4c03]">
    //   <div className="container mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li><Link href="/about" className="hover:text-[#cc4c03] transition-colors">About Us</Link></li>
    //           <li><Link href="/privacy" className="hover:text-[#cc4c03] transition-colors">Privacy Policy</Link></li>
    //           <li><Link href="/terms" className="hover:text-[#cc4c03] transition-colors">Terms of Service</Link></li>
    //           <li><Link href="/systems/contact" className="hover:text-[#cc4c03] transition-colors">Contact Us</Link></li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Follow Us</h3>
    //         <div className="flex space-x-4">
    //           <a 
    //             href="https://facebook.com" 
    //             target="_blank" 
    //             rel="noopener noreferrer" 
    //             className="text-white hover:text-[#cc4c03] transition-colors"
    //             aria-label="Follow us on Facebook"
    //           >
    //             <Image src="/facebook-icon.svg" alt="" width={24} height={24} />
    //             <span className="sr-only">Facebook</span>
    //           </a>
    //           <a 
    //             href="https://twitter.com" 
    //             target="_blank" 
    //             rel="noopener noreferrer" 
    //             className="text-white hover:text-[#cc4c03] transition-colors"
    //             aria-label="Follow us on Twitter"
    //           >
    //             <Image src="/twitter-icon.svg" alt="" width={24} height={24} />
    //             <span className="sr-only">Twitter</span>
    //           </a>
    //           <a 
    //             href="https://instagram.com" 
    //             target="_blank" 
    //             rel="noopener noreferrer" 
    //             className="text-white hover:text-[#cc4c03] transition-colors"
    //             aria-label="Follow us on Instagram"
    //           >
    //             <Image src="/instagram-icon.svg" alt="" width={24} height={24} />
    //             <span className="sr-only">Instagram</span>
    //           </a>
    //         </div>
    //       </div>
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Download Our App</h3>
    //         <div className="flex flex-col space-y-2">
    //           <Link href="https://apps.apple.com/your-app" className="inline-block">
    //             <Image src="/apple_badge.png" alt="Download on App Store" width={120} height={40} />
    //           </Link>
    //           <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block">
    //             <Image src="/google_badge.png" alt="Get it on Google Play" width={135} height={40} />
    //           </Link>
    //         </div>
    //       </div>
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Newsletter</h3>
    //         <form className="flex flex-col space-y-2">
    //           <input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="px-3 py-2 bg-gray-100 text-gray-800 rounded border border-[#cc4c03] focus:outline-none focus:ring-2 focus:ring-[#cc4c03]"
    //           />
    //           <button
    //             type="submit"
    //             className="bg-[#cc4c03] hover:bg-black text-white px-4 py-2 rounded transition-colors border border-[#cc4c03]"
    //           >
    //             Subscribe
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //     <div className="mt-12 text-center text-sm text-white">
    //       <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-white text-gray-700 py-12 border-t-2 border-[#cc4c03]/30">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Section 1: Quick Links */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link href="/systems/about-us" className="text-gray-700 hover:text-[#cc4c03] transition-colors">About Us</Link></li> 
          <li><Link href="/privacy" className="text-gray-700 hover:text-[#cc4c03] transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="text-gray-700 hover:text-[#cc4c03] transition-colors">Terms of Service</Link></li>
          <li><Link href="/systems/contact" className="text-gray-700 hover:text-[#cc4c03] transition-colors">Contact Us</Link></li>
        </ul>
      </div>
      {/* Section 2: Follow Us */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Follow Us</h3>
        <div className="flex space-x-4">
          <a /* ... */ className="text-gray-700 hover:text-[#cc4c03] transition-colors" /* Assuming icons are mono and will use this, or are self-colored */>
            <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a /* ... */ className="text-gray-700 hover:text-[#cc4c03] transition-colors" /* Assuming icons are mono and will use this, or are self-colored */>
            <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a /* ... */ className="text-gray-700 hover:text-[#cc4c03] transition-colors" /* Assuming icons are mono and will use this, or are self-colored */>
            <Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} />
            <span className="sr-only">Facebook</span>
          </a>
          {/* ... similar for twitter, instagram ... */}
        </div>
      </div>
      {/* Section 3: Download Our App */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#cc4c03]">Download Our App</h3>
        <div className="flex flex-col space-y-2">
          <Link href="https://apps.apple.com/your-app" className="inline-block">
            <Image src="/apple_badge.png" alt="Download on App Store" width={120} height={40} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=your-app" className="inline-block">
            <Image src="/google_badge.png" alt="Get it on Google Play" width={135} height={40} />
          </Link>
        </div>
      </div>
      {/* Newsletter section is GONE */}
    </div>
    <div className="mt-12 text-center text-sm text-gray-500"> 
      <p>© {new Date().getFullYear()} Servizo. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
