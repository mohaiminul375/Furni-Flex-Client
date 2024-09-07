import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  // website layout
  return (
    <div className="font-barlow">
      {/* navbar */}
      <Navbar></Navbar>
      
        {/* web content */}
      <div className="md:max-w-7xl mx-auto md:min-h-[calc(100vh-160px)]">
        <Outlet></Outlet>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
