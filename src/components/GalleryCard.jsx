import { useState } from "react";

import AreaImagesList from "./AreaImagesList";

export default function GalleryCard({
   galleries,
   galleryName,
   galleryHeroImg,
}) {
   const [showGalleryThumbnails, setShowGalleryThumbnails] = useState(false);

   function handleClick() {
      setShowGalleryThumbnails((showing) => !showing);
   }
   return (
      <>
         {showGalleryThumbnails ? (
            <div className="grid">
               <div className="flex space-x-2 justify-center">
                  <h2 className=" text-xl tracking-widest text-center">
                     {galleryName}
                  </h2>
                  <button className="text-xs" onClick={handleClick}>
                     ❌
                  </button>
               </div>
               <div className="">
                  <AreaImagesList
                     galleries={galleries}
                     galleryName={galleryName}
                  />
               </div>
            </div>
         ) : (
            <li className="relative">
               <img
                  src={galleryHeroImg}
                  alt="SRD hero"
                  width="100%"
                  height="auto"
                  className="opacity-50 rounded-xl"
               />

               <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-gray-500/70  ">
                  <button
                     className="text-xl font-bold px-5 py-3 hover:text-black hover:bg-white rounded animate-pulse"
                     onClick={handleClick}
                  >
                     {galleryName}
                  </button>
               </div>
            </li>
         )}
      </>
   );
}
