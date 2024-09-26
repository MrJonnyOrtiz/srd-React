import { useState } from "react";
import PropTypes from "prop-types";

AreaImage.propTypes = {
   tn: PropTypes.string,
   img: PropTypes.string,
   altText: PropTypes.string,
};

export default function AreaImage({ tn, img, altText }) {
   const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(true);

   return (
      <>
         {/* Thumbnail button */}
         <button onClick={() => setShowModal(true)}>
            <img
               src={tn}
               alt={altText}
               width="200px"
               height="200px"
               onLoad={() => setLoading(false)}
            />
         </button>
         {showModal && (
            <>
               {/* Modal container */}
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative my-6 mx-auto max-w-xl">
                     {/* Modal content */}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-lg"></div>
                        {/* Modal body */}
                        <div className="relative p-6 flex-auto">
                           {/* Loading Indicator */}
                           {loading && (
                              <div className="flex justify-center items-center h-full">
                                 <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-black" />
                                 </div>
                              </div>
                           )}
                           {/* Full size Image */}
                           <img
                              src={img}
                              alt={altText}
                              width="100%"
                              height="auto"
                              onLoad={() => setLoading(false)}
                              style={{ display: loading ? "none" : "block" }} // Hide image until loaded
                           />
                        </div>
                        {/* Modal footer */}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-lg">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => {
                                 setShowModal(false);
                                 setLoading(true);
                              }}
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
