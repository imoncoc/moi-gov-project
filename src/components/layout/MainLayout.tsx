import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Footer from "../../pages/shared/Footer";
import BangladeshNationalPortal from "../../pages/shared/BangladeshNationalPortal";

const MainLayout = () => {
  return (
    <div>
      <BangladeshNationalPortal />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
