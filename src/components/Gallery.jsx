import { Link } from "react-router-dom";
import GalleryCard from "./GalleryCard";

export default function Gallery({ galleries = [] }) {
   return (
      <div id="gallery" className=" px-5">
         <h2 className="text-3xl font-bold text-center mt-5 mb-3">Gallery</h2>
         <div className="m-5 flex flex-col items-center justify-center">
            <Link
               to="/feature"
               className="flex items-center gap-1 font-semibold text-2xl hover:bg-white hover:rounded-lg hover:text-black bg-gray-600 border rounded-lg px-3 py-1"
            >
               <span className="relative flex w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full  h-3 w-3 bg-sky-500"></span>
               </span>
               <span className="text-center">
                  &rarr; Click here for a recent Whole House Remodel &larr;
               </span>
               <span className="relative flex w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
               </span>
            </Link>
         </div>

         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center">
            {galleries.map((gallery) => (
               <GalleryCard
                  galleries={galleries}
                  galleryName={gallery.galleryName}
                  key={gallery.id}
                  galleryHeroImg={gallery.galleryHeroImg}
               />
            ))}
         </ul>
      </div>
   );
}
