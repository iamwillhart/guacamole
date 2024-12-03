'use client'

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Reject All"
      cookieName="hedgehog-fundamentals-consent"
      style={{ 
        background: "rgba(0, 0, 0, 0.9)", 
        backdropFilter: "blur(10px)",
        zIndex: 9999,
        padding: "1rem"
      }}
      buttonStyle={{ 
        background: "#fda4af",
        color: "white",
        fontSize: "13px",
        borderRadius: "4px",
        padding: "8px 15px"
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid #fda4af",
        color: "#fda4af",
        fontSize: "13px",
        borderRadius: "4px",
        padding: "8px 15px",
        marginRight: "10px"
      }}
      enableDeclineButton
      setDeclineCookie={true}
      expires={150}
      onAccept={() => {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'functionality_storage': 'granted',
          'personalization_storage': 'granted'
        });
      }}
      onDecline={() => {
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied'
        });
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ marginBottom: "1rem" }}>
          🦔 We value your privacy
        </p>
        <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          We use cookies to enhance your browsing experience, analyze site traffic, and improve our educational services. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <p style={{ fontSize: "0.8rem", opacity: 0.8 }}>
          We use: (1) Essential cookies for site functionality, (2) Analytics cookies to understand usage patterns, and (3) Performance cookies to optimize your experience.
        </p>
        <a 
          href="/privacy-policy" 
          style={{ 
            color: "#fda4af", 
            textDecoration: "underline", 
            fontSize: "0.8rem",
            display: "inline-block",
            marginTop: "0.5rem"
          }}
        >
          Learn more in our Privacy Policy
        </a>
      </div>
    </CookieConsent>
  );
} 