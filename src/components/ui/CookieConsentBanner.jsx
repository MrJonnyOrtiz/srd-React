import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsentBanner() {
   const [isConsentGiven, setIsConsentGiven] = useState(false);

   useEffect(() => {
      // Check for existing consent in localStorage
      const consent = localStorage.getItem("cookieConsent");

      if (consent === "true") {
         setIsConsentGiven(true);
         loadGoogleAnalytics();
         loadGoogleTagManager();
      }
   }, []);

   const handleAccept = () => {
      // Save consent in localStorage
      localStorage.setItem("cookieConsent", "true");
      setIsConsentGiven(true);

      // Load third-party scripts
      loadGoogleAnalytics();
      loadGoogleTagManager();
   };

   const loadGoogleAnalytics = () => {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-CHEZE0LXQD";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
         window.dataLayer = window.dataLayer || [];
         function gtag() {
            window.dataLayer.push(arguments);
         }
         gtag("js", new Date());
         gtag("config", "G-CHEZE0LXQD");
      };
   };

   const loadGoogleTagManager = () => {
      (function (w, d, s, l, i) {
         w[l] = w[l] || [];
         w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
         const f = d.getElementsByTagName(s)[0];
         const j = d.createElement(s);
         const dl = l !== "dataLayer" ? "&l=" + l : "";
         j.async = true;
         j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
         f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-KKXLD2P8");
   };

   // If consent is given, do not show the banner
   if (isConsentGiven) return null;

   return (
      <div className="fixed bottom-4 right-4 w-20 h-20 bg-white text-black rounded-lg shadow-lg z-50 flex items-center justify-center">
         <button
            onClick={handleAccept}
            className="bg-green-500 text-white px-2 py-1 text-xs rounded-md"
            aria-label="Accept cookies"
         >
            Accept Cookies
         </button>
         <Link
            to="/privacy-policy"
            className="absolute bottom-1 right-1 text-xs text-black underline"
            aria-label="Learn more about our privacy policy"
         >
            ?
         </Link>
      </div>
   );
}
