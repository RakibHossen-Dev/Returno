import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins max-w-[1520px]  mx-auto">
      <Navber></Navber>
      <div className="min-h-[500px] mt-28">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
