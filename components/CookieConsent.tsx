/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from 'react';

// Extend the window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGoogleAdsScript();
    }
  }, []);

  const loadGoogleAdsScript = () => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ADS_ID";
    script.async = true;
    document.body.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: any[]) {
      window.dataLayer.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', 'YOUR_GOOGLE_ADS_ID');
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    loadGoogleAdsScript();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 w-full bg-white border-t border-gray-200 shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-50">
      <p className="text-gray-600 text-sm sm:text-base">We use cookies to enhance your browsing experience and analyze site traffic. Would you like to accept cookies?</p>
      <div className="flex gap-3">
        <button 
          onClick={handleAccept} 
          className="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors"
        >
          Accept
        </button>
        <button 
          onClick={handleDecline}
          className="px-6 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-full hover:bg-gray-100 transition-colors" 
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
