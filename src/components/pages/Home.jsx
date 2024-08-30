import { useEffect } from "react";
import Benefit from "../ui/Benefit";
import CTA from "../ui/CTA";

export default function Home() {
   useEffect(() => {
      window.gtag("event", "homePage");
   }, []);

   const text1 = "2024 SRQ Magazine Bronze Winner Best Contractor, Residential";
   const text2 = "2024 SRQ Magazine Platinum Winner Best Kitchen Designer";
   const text3 = "2024 SRQ Magazine Platinum Winner Best Bathroom Remodeler";

   return (
      <div className="grid grid-cols-1 gap-3  md:grid-cols-2">
         {/* hero image, curtain, and SRQ Magazine badge */}
         <div className="flex gap-3 flex-col items-center justify-center md:order-2">
            <div className="relative px-3 m-7 py-3">
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
                     className="absolute -top-0 rounded-full -right-1 animate-[pulse_1s_linear_2s_4] -rotate-[15deg]"
                     src="SRQBest2024cropped.jpg"
                     width="15%"
                     height="auto"
                     alt="SRQ Best of Logo"
                  />
                  <span
                     className={`pointer-events-none absolute -top-10 sm:top-13 -right-0 w-max rounded-xl px-2 py-1 text-white opacity-0 transition-opacity group-hover:opacity-100`}
                  >
                     2024 SRQ Magazine Winner
                  </span>
               </div>

               <div className="absolute inset-0 bg-black slideOut rounded-xl"></div>
            </div>
         </div>

         {/* benefits */}
         <div className="flex flex-col items-center justify-start gap-3 md:gap-4 text-sm sm:text-lg md:text-xl md:order-1 lg:text-2xl">
            <h1 className="text-2xl md:text-4xl lg:text-6xl md:p-4 lg:p-6 italic md:mt-6">
               Why choose us?
            </h1>
            <div className="flex items-center justify-center w-3/4 ">
               <Benefit text={text3} />
            </div>
            <div className="flex items-center justify-center w-3/4 ">
               <Benefit text={text2} />
            </div>
            <div className="flex items-center justify-center w-3/4 ">
               <Benefit text={text1} />
            </div>
            <div className="flex items-center justify-center md:col-span-2 md:order-3">
               <CTA />
            </div>
         </div>
      </div>
   );
}
