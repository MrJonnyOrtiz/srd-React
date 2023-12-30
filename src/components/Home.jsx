import { useEffect, useState } from "react";

export default function Home() {
   const [showBtn, setShowBtn] = useState(false);

   // show button after 10 seconds
   useEffect(() => {
      setTimeout(() => setShowBtn(true), 6000);
   }, []);

   useEffect(() => {
      window.gtag("event", "homePage");
   }, []);

   const text1 = "From design to construction";
   const text2 = "Unparalleled workmanship";
   const text3 = "Sarasota's top rated contractor";
   return (
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

            <div className="absolute inset-0 bg-black slideOut"></div>
         </div>
         <div className="text-center text-lg md:text-3xl inset-x-0 top-1/4">
            <p className="font-semibold w-full bg-slate-50/50 m-3 showup">
               {text1}
            </p>
            <p className="font-semibold w-full bg-slate-50/50 m-3 showup">
               {text2}
            </p>
            <p className="font-semibold w-full  bg-slate-50/50 m-3 showup">
               {text3}
            </p>
            {showBtn && (
               <div className="m-5">
                  <a
                     href="tel:9413130263"
                     className="bg-white text-black font-semibold hover:bg-black hover:border-4 hover:text-white px-4 py-2 rounded-lg animate-pulse"
                  >
                     GET A FREE QUOTE!
                  </a>
               </div>
            )}
         </div>
      </div>
   );
}
