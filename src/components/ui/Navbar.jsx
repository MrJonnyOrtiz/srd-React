import { useState } from "react";
import { Link } from "react-router-dom";

function ShowLogo() {
   return (
      <img
         src="SRDlogoBlack.png"
         alt="Sarasota Remodeling & Design logo"
         className="md:w-[80px] h-auto w-[160px]"
      />
   );
}

export default function NavBar() {
   const [isOpen, setIsOpen] = useState(false);
   const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

   return (
      <nav className="relative flex items-center justify-between p-4 bg-gray-800 text-white">
         <Link to="/" className="flex items-center">
            <ShowLogo />
            <h1 className="hidden md:block ml-1 md:text-xl font-bold">
               Sarasota Remodeling & Design
            </h1>
         </Link>

         {/* Mobile Hamburger Menu */}
         <div className="md:hidden">
            <button
               id="hamburger"
               aria-label="Toggle navigation menu"
               aria-expanded={isOpen}
               className="fixed top-4 right-4 flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group z-50"
               onClick={() => setIsOpen((o) => (o = !o))}
            >
               <span
                  className={`${genericHamburgerLine} ${
                     isOpen ? "rotate-45 translate-y-3" : "opacity-50"
                  }`}
               />
               <span
                  className={`${genericHamburgerLine} ${
                     isOpen ? "opacity-0" : "opacity-50"
                  }`}
               />
               <span
                  className={`${genericHamburgerLine} ${
                     isOpen ? "-rotate-45 -translate-y-3" : "opacity-50"
                  }`}
               />
            </button>
         </div>

         {/* Mobile Navigation */}
         <div
            className={`${
               isOpen ? "block" : "hidden"
            } md:hidden fixed top-0 left-0 w-full  bg-gray-800 text-center p-4 z-40`}
         >
            <ul className="flex flex-col z-10 items-center justify-center space-y-4">
               {[
                  { path: "/home", label: "Home" },
                  { path: "/services", label: "Services" },
                  { path: "/gallery", label: "Gallery" },
                  { path: "/contact", label: "Contact" },
                  { path: "/blog", label: "Blog" },
                  { path: "/reviews", label: "Reviews" },
               ].map((item) => (
                  <li
                     key={item.path}
                     className="hover:bg-white hover:text-black px-2 py-2 rounded-lg"
                  >
                     <Link
                        to={item.path}
                        onClick={() => setIsOpen((o) => (o = !o))}
                        aria-label={item.label}
                     >
                        {item.label}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

         {/* Desktop Navigation */}
         <ul className="hidden md:flex space-x-6 items-center">
            {[
               { path: "/services", label: "Services" },
               { path: "/gallery", label: "Gallery" },
               { path: "/contact", label: "Contact" },
               { path: "/blog", label: "Blog" },
               { path: "/reviews", label: "Reviews" },
            ].map((item) => (
               <li
                  key={item.path}
                  className="hover:bg-white hover:text-black px-2 py-2 rounded-lg"
               >
                  <Link to={item.path} aria-label={item.label}>
                     {item.label}
                  </Link>
               </li>
            ))}
            <a
               href="tel:9413130263"
               className="bg-white text-black font-semibold hover:bg-black hover:border-4 hover:text-white px-4 py-2 rounded-xl animate-pulse lg:text-xl text-center ml-3 md:block hidden"
            >
               FREE QUOTE!
            </a>
         </ul>
      </nav>
   );
}
