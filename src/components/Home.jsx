import { useEffect, useState } from "react";
import Benefit from "./Benefit";

export default function Home() {
   const [showBtn, setShowBtn] = useState(false);

   // show button after 10 seconds
   useEffect(() => {
      setTimeout(() => setShowBtn(true), 6000);
   }, []);

   useEffect(() => {
      window.gtag("event", "homePage");
   }, []);

   const text1 = "2024 SRQ Magazine Bronze Winner Best Contractor, Residential";
   // const text1 = "From design to construction";
   const text2 = "2024 SRQ Magazine Platinum Winner Best Kitchen Designer";
   // const text2 = "Unparalleled workmanship";
   const text3 = "2024 SRQ Magazine Platinum Winner Best Bathroom Remodeler";
   // const text3 = "Sarasota's top rated contractor";

   return (
      <div className="grid grid-cols-1">
         <div className="flex flex-col items-center justify-center">
            <div className="relative m-7">
               <div className="absolute inset-0 bg-gray-100 rounded-xl  blur-xl"></div>
               <img
                  className="relative"
                  src="Image 10-18-22 at 6.39 PM.webp"
                  alt="SRD hero"
                  width="100%"
                  height="auto"
               />
               <div className="group">
                  <img
                     className="absolute -top-3 rounded-full -right-3 md:-top-7 md:-right-7 "
                     src="SRQBest2024.jpeg"
                     width="20%"
                     height="auto"
                     alt="SRQ Best of Logo"
                  />
                  <span
                     className={`pointer-events-none absolute top-7 sm:top-13 -right-0 w-max rounded-xl px-2 py-1 text-black opacity-0 transition-opacity group-hover:opacity-100`}
                  >
                     2024 SRQ Magazine Winner
                  </span>
               </div>

               <div className="absolute inset-0 bg-black slideOut"></div>
            </div>
         </div>
         <div className="grid grid-cols-1 gap-2 md:gap-4 max-w-prose mx-auto text-center text-sm sm:text-lg md:text-2xl inset-x-0 top-1/4">
            <Benefit text={text3} />
            <Benefit text={text2} />
            <Benefit text={text1} />

            {showBtn && (
               <div className="m-5">
                  <a
                     href="tel:9413130263"
                     className="bg-white text-black font-semibold hover:bg-black hover:border-4 hover:text-white px-4 py-2 rounded-xl animate-pulse"
                  >
                     GET A FREE QUOTE!
                  </a>
               </div>
            )}
         </div>
      </div>
   );
}
