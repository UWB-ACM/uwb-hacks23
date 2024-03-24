import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home/Home.js";
import Register from "./Register/Register";
import FAQ from "./Home/FAQ";
import React, {useEffect} from "react";
import Header from "./Home/Header"
import Footer from "./Home/Footer"
import {ContactUs} from "./Home/Contact";
import Schedule from "./Home/Schedule";

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);

  return (
      <>
        <BrowserRouter>
          <Header />
          <Routes className="max-w-md">
            <Route path="*" element={<Home />} />
            <Route path="/uwb-hacks24" element={<Home />} />
            {/** <Route path="/uwb-hacks24/Registration" element={<Register />} />*/}
            <Route path="/uwb-hacks24/Schedule" element={<Schedule />} />
            <Route path="/uwb-hacks24/FAQ" element={<FAQ />} />
            <Route path="/uwb-hacks24/Contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>

  );
}

export default App;
