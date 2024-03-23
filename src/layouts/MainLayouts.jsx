import Footer from "../components/Footer";
import Nav from "../components/Nav";

import { Outlet } from "react-router-dom";
const MainLayouts = () => {
    return (
        <div>
             <div className="h-20"> 
           <Nav></Nav>
           </div>
          <div className="min-h-[calc(100vh-145px)]"> 
          <Outlet></Outlet>
          </div>
           {/* <Home>
           </Home>
           <Blogs>
           </Blogs>
            <Bookmarks></Bookmarks> */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;