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
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p>We use cookies for tracking purposes. Do you accept?</p>
      <div>
        <button onClick={handleAccept} className="mr-2 bg-green-500 p-2 rounded">Accept</button>
        <button onClick={handleDecline} className="bg-red-500 p-2 rounded">Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
