export default function Footer() {
   return (
      <footer className="grid grid-cols-1 md:grid-cols-3  bg-gray-600 p-3">
         <div className="m-3 text-center md:text-left">
            <h2 className="text-lg font-bold">
               Sarasota Remodeling & Design LLC
            </h2>
            <p>
               {/* <em>By appointment only:</em>
               <br />
               6130 Clark Center Ave Unit 107
               <br />
               Sarasota, FL 34242
               <br /> */}
               <a href="tel:9413130263">(941)313-0263</a>
               <br />
               <a href="mailto:info@sarasotaremodeling.com">
                  info@sarasotaremodeling.com
               </a>
            </p>
         </div>
         {/* <div className="m-3">
            <ul>
               <p>Quick Links:</p>
               <li>
                  <a href="#home" className="hover:underline">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#services" className="hover:underline">
                     Services
                  </a>
               </li>
               <li>
                  <a href="#gallery" className="hover:underline">
                     Gallery
                  </a>
               </li>
               <li>
                  <a href="#contact" className="hover:underline">
                     Contact
                  </a>
               </li>
               <li>
                  <a href="#blog" className="hover:underline">
                     Blog
                  </a>
               </li>
            </ul>
         </div> */}
         <div className="m-3 text-center">
            <p>
               Follow us on&nbsp;
               <a
                  href="https://www.facebook.com/profile.php?id=100070092405409"
                  target="_blank"
                  rel="noreferrer"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="16"
                     height="16"
                     fill="currentColor"
                     viewBox="0 0 16 16"
                     className="mx-auto"
                  >
                     <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>{" "}
                  Facebook
               </a>
            </p>
         </div>
         <div className="m-3 text-center md:text-right">
            <p className="hover:underline">
               Powered by&nbsp;
               <a
                  href="https://cloudrealmllc.com"
                  target="_blank"
                  rel="noreferrer"
               >
                  Cloud Realm LLC
               </a>
               <br />
               &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
         </div>
      </footer>
   );
}
