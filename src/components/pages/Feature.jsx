import { useEffect } from "react";
import FeatureCard from "../ui/FeatureCard";
import PropTypes from "prop-types";

Feature.propTypes = {
   features: PropTypes.array,
};

function Feature({ features }) {
   useEffect(() => {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem("cookieConsent") === "true";

      if (isConsentGiven && window.gtag) {
         window.gtag("event", "featurePage");
      }
   }, []);

   return (
      <div>
         <h2 className="text-3xl font-bold text-center mt-5 mb-3">
            Featured Whole House Remodel
         </h2>

         {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
         ))}
      </div>
   );
}

export default Feature;
