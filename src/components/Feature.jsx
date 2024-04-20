import { useEffect } from "react";
import FeatureCard from "./FeatureCard";

function Feature({ features }) {
   useEffect(() => {
      window.gtag("event", "featurePage");
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
