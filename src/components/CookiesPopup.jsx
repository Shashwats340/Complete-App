import React, { useState, useEffect } from 'react';
import './CookiesPopup.css';

const CookiesPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookies-popup">
      <div className="cookies-content">
        <p>
          We use cookies for the best user experience on our website, including to personalize content & offerings, to
          provide social media features and to analyze traffic. By clicking "Accept All Cookies" you agree to our use of
          cookies. For more information on how we use cookies please visit our{' '}
          <a href="/cookie-statement" className="cookie-link">Cookie Statement</a> and{' '}
          <a href="/privacy-policy" className="cookie-link">Privacy Policy</a>.
        </p>
        <div className="cookies-actions">
          <button className="cookies-necessary-btn" onClick={handleAccept}>Accept Necessary Cookies</button>
          <button className="cookies-accept-btn" onClick={handleAccept}>
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPopup;
