import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CookieConsentBanner() {
   const [isConsentGiven, setIsConsentGiven] = useState(false);
   const [isBannerVisible, setIsBannerVisible] = useState(true);
   const [isExpanded, setIsExpanded] = useState(false);

   useEffect(() => {
      // Check for existing consent in localStorage
      const consent = localStorage.getItem("cookieConsent");

      if (consent === "true") {
         setIsConsentGiven(true);
         setIsBannerVisible(false);
         loadGoogleAnalytics();
         loadGoogleTagManager();
      }
   }, []);

   const handleAccept = () => {
      // Save consent in localStorage
      localStorage.setItem("cookieConsent", "true");
      setIsConsentGiven(true);
      setIsBannerVisible(false);

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

   const toggleExpand = () => {
      setIsExpanded(!isExpanded);
   };

   // If consent is given or the banner is not visible, do not show the banner
   if (!isBannerVisible) return null;

   return (
      <div
         className={`fixed bottom-4 right-4 w-64 p-3 bg-gray-800 text-white rounded-lg shadow-md z-50 transition-all ${
            isExpanded ? "h-auto" : "h-12"
         }`}
      >
         {/* Expand/Collapse Button */}
         <button
            onClick={toggleExpand}
            className="absolute top-0 right-1 text-white text-lg"
            aria-label={
               isExpanded
                  ? "Minimize cookie consent banner"
                  : "Expand cookie consent banner"
            }
         >
            {isExpanded ? "−" : "+"}
         </button>

         {isExpanded ? (
            <>
               <div className="text-center text-sm mb-2">
                  We use cookies to enhance your experience and improve website
                  functionality and content.
               </div>
               <div className="flex gap-2 items-center justify-center">
                  <button
                     onClick={handleAccept}
                     className="bg-green-500 text-black font-semibold px-3 py-1 rounded-md mb-2"
                     aria-label="Accept cookies"
                  >
                     Accept
                  </button>
                  <Link
                     to="/privacy-policy"
                     className="text-xs text-white underline"
                     aria-label="Learn more about our privacy policy"
                  >
                     Privacy policy
                  </Link>
               </div>
            </>
         ) : (
            <div className="text-center text-sm">
               We use cookies.{" "}
               <span
                  className="underline cursor-pointer"
                  onClick={toggleExpand}
               >
                  Privacy policy
               </span>
            </div>
         )}
      </div>
   );
}
