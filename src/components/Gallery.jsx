import { useState, useEffect } from "react";

function AreaImage({ tn, img, altText }) {
   const [showModal, setShowModal] = useState(false);
   return (
      <>
         <button onClick={() => setShowModal(true)}>
            <img src={tn} alt={altText} width="200px" height="200px" />
         </button>
         {showModal && (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 mx-auto max-w-lg">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-lg"></div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                           <img
                              src={img}
                              alt={altText}
                              width="100%"
                              height="auto"
                           />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-lg">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         )}
      </>
   );
}

function AreaImagesList({ galleries, galleryName }) {
   const [showModal, setShowModal] = useState(false);

   function handleShowModal() {
      setShowModal((showing) => !showing);
   }

   useEffect(() => {
      window.gtag("event", galleryName);
   }, [galleryName]);

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center overflow-auto h-96 lg:h-[16rem] xl:h-[36rem]">
         {galleries
            .find((gallery) => gallery.galleryName === galleryName)
            .galleryImgs.map((imgObj) => (
               <AreaImage
                  key={imgObj.imgId}
                  tn={imgObj.tn}
                  img={imgObj.img}
                  altText={imgObj.altText}
                  showModal={showModal}
                  onShowModal={handleShowModal}
               />
            ))}
      </div>
   );
}

function GalleryCard({ galleries, galleryName, galleryHeroImg }) {
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

export default function Gallery({ galleries = [] }) {
   return (
      <div id="gallery" className=" px-5">
         <h2 className="text-3xl font-bold text-center mt-5 mb-3">Gallery</h2>

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
