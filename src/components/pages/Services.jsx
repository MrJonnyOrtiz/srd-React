import { useEffect } from "react";
import PropTypes from "prop-types";
import CTA from "../ui/CTA";

ServiceCard.propTypes = {
   serviceName: PropTypes.string,
   serviceDescription: PropTypes.string,
};

Services.propTypes = {
   services: PropTypes.array,
};

function ServiceCard({ serviceName, serviceDescription }) {
   return (
      <li className=" m-2 bg-white text-black rounded">
         {/* <li className=" m-2 bg-white text-black rounded overflow-hidden shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white duration-300"> */}
         <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 ">{serviceName}</div>
            <p className=" text-base">{serviceDescription}</p>
         </div>
      </li>
   );
}

export default function Services({ services = [] }) {
   useEffect(() => {
      // Check if the user has given consent for analytics in localStorage
      const isConsentGiven = localStorage.getItem("cookieConsent") === "true";

      if (isConsentGiven && window.gtag) {
         window.gtag("event", "servicesPage");
      }
   }, []);

   return (
      <div className="grid grid-cols-1 gap-3 px-5">
         <h1 className="text-3xl font-bold text-center mt-5">Services</h1>
         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 justify-items-center">
            {services.map((service) => (
               <ServiceCard
                  serviceName={service.serviceName}
                  serviceDescription={service.serviceDescription}
                  key={service.id}
               />
            ))}
         </ul>
         <div className="text-center my-5 md:hidden">
            <CTA />
         </div>
      </div>
   );
}
