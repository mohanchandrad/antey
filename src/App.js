
import React from "react";
// import Header from './layout/Header'
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

// git remote add origin https://github.com/mohanchandrad/avast_anteyVairus.git
//   git branch -M main
//   git push -u origin main