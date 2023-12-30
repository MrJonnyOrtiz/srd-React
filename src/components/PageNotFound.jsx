import { Link } from "react-router-dom";

function PageNotFound() {
   return (
      <>
         <div className="flex items-center justify-center">
            <div className="flex flex-col items-center p-3">
               <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">
                  404
               </h1>

               <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                  <span className="text-red-500">Oops!</span>
                  <span className="text-white"> Page not found.</span>
               </h6>

               <p className="mb-4 text-center text-white md:text-lg">
                  The page you’re looking for doesn’t exist.
               </p>

               <Link
                  to="/"
                  className="rounded bg-white text-black font-bold py-2 px-4 my-3 hover:text-white hover:bg-gray-700 animate-pulse"
               >
                  Go home
               </Link>
            </div>
         </div>
      </>
   );
}

export default PageNotFound;
