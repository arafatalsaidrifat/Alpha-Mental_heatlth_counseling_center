import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";


function App  ()  {
return (
  <>
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>

  </>
);

}
export default App;



