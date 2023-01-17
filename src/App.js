import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/1Home";
import Services from "./pages/2Services";
import Members from "./pages/3Members";
import Records from "./pages/4Records";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/member" element={<Members />} />
          <Route path="/record" element={<Records />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
