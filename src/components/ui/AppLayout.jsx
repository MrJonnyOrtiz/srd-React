import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

import Footer from "./Footer";

function AppLayout() {
   return (
      <div className="grid grid-rows-[auto_1fr_auto] gap-3 h-[100dvh]">
         <div className="-mt-14 sm:mt-0">
            <Navbar />
         </div>
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}

export default AppLayout;
