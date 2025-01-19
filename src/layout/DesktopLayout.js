import { Outlet } from "react-router-dom";
import Header from "../components/globalLayout/Header";
import ScrollToTop from "../components/globalLayout/ScrollToTop";
import Footer from "../components/globalLayout/Footer";

const DesktopLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DesktopLayout;
