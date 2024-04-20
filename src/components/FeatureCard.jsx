import { useState } from "react";

function FeatureCard({ feature }) {
   const [showModal, setShowModal] = useState(false);
   const [modalImage, setModalImage] = useState({});
   const { featureHeroImg, images } = feature;

   const toggleImage = (e) => {
      setModalImage(
         images.filter((img) => img.imgId === parseInt(e.target.id))
      );
      setShowModal((tn) => !tn);
   };

   return (
      <div>
         <div className="flex justify-center items-center gap-5 mb-5">
            <img
               className="rounded-lg xs:max-w-xl sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%]"
               src={featureHeroImg}
               alt="owner of featured home"
            />
         </div>
         <div className="flex gap-1 items-center justify-center m-2">
            Click an image for a larger view
            <span className="relative flex w-3 h-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
         </div>
         <ul className="flex flex-wrap gap-5 justify-center ">
            {images.map((image) => (
               <li
                  key={image.imgId}
                  onClick={toggleImage}
                  className="text-center text-sm "
               >
                  <>
                     <img
                        className="cursor-pointer w-auto h-auto rounded-lg"
                        src={image.tn}
                        alt={image.altText}
                        id={image.imgId}
                     />
                     {image.type === "beforeAfter" && (
                        <span className="text-sm">before &amp; after</span>
                     )}
                  </>
               </li>
            ))}
         </ul>
         {/* show modal */}
         {showModal && (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div
                     className={`relative my-6 mx-auto ${
                        modalImage[0].orientation === "portrait"
                           ? `max-w-xl`
                           : `xs:max-w-full md:max-w-[65%]`
                     }`}
                  >
                     {/* <div className="relative my-6 mx-auto max-w-xl"> */}
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-lg"></div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                           <img
                              className="w-full h-auto"
                              src={modalImage[0].img}
                              alt={modalImage[0].altText}
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
      </div>
   );
}

export default FeatureCard;
