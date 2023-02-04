import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/globalLayout/Header";
import Footer from "./components/globalLayout/Footer";
import Page1Home from "./pages/Page1_Home";
import Page2Services from "./pages/Page2_Services";
import Page3Members from "./pages/Page3_Members";
import PageXNotFound from "./pages/PageX_NotFound";
import ScrollToTop from "./components/globalLayout/ScrollToTop";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Page1Home />} />
          <Route path="/service" element={<Page2Services />} />
          <Route path="/member" element={<Page3Members />} />
          <Route path="/*" element={<PageXNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
