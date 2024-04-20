import { useState, useEffect } from "react";
import AreaImage from "./AreaImage";

export default function AreaImagesList({ galleries, galleryName }) {
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
