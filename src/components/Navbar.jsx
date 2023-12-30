import { useState } from "react";
import { Link } from "react-router-dom";

function ShowLogo() {
   return (
      <img
         src="SRDlogoBlack.png"
         alt="SRD logo"
         width={250}
         height="auto"
         className="md:w-1/12"
      />
   );
}

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);
   const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
   return (
      <nav>
         <Link to="/">
            <div className="flex justify-center -mb-6 md:-mb-0">
               <ShowLogo />
               <h1 className="hidden md:flex space-x-8 items-center text-4xl">
                  Sarasota Remodeling & Design
               </h1>
            </div>
         </Link>
         <div className="flex justify-around items-center">
            {/* xs and small nav */}
            <button
               className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group md:hidden"
               onClick={() => setIsOpen(!isOpen)}
            >
               <div
                  className={`${genericHamburgerLine} ${
                     isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                  }`}
               />
               <div
                  className={`${genericHamburgerLine} ${
                     isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
               />
               <div
                  className={`${genericHamburgerLine} ${
                     isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                  }`}
               />
            </button>
            {isOpen && (
               <>
                  <ul className="flex  items-center gap-3 md:hidden">
                     <li>
                        <Link to="/services" onClick={() => setIsOpen(!isOpen)}>
                           Services
                        </Link>
                     </li>
                     <li>
                        <Link to="/gallery" onClick={() => setIsOpen(!isOpen)}>
                           Gallery
                        </Link>
                     </li>
                     <li>
                        <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
                           Contact
                        </Link>
                     </li>
                     <li>
                        <Link to="/blog" onClick={() => setIsOpen(!isOpen)}>
                           Blog
                        </Link>
                     </li>
                     <li>
                        <Link to="/reviews" onClick={() => setIsOpen(!isOpen)}>
                           Reviews
                        </Link>
                     </li>
                  </ul>
               </>
            )}
            {/* md and large nav */}
            <ul className="hidden md:flex space-x-8">
               <li className="hover:bg-white hover:text-black hover:px-2 hover:font-bold">
                  <Link to="/services">Services</Link>
               </li>
               <li className="hover:bg-white hover:text-black hover:px-2 hover:font-bold">
                  <Link to="/gallery">Gallery</Link>
               </li>
               <li className="hover:bg-white hover:text-black hover:px-2 hover:font-bold">
                  <Link to="/contact">Contact</Link>
               </li>
               <li className="hover:bg-white hover:text-black hover:px-2 hover:font-bold">
                  <Link to="/blog">Blog</Link>
               </li>
               <li className="hover:bg-white hover:text-black hover:px-2 hover:font-bold">
                  <Link to="/reviews">Reviews</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}
