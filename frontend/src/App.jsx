import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SavingDetails from "./components/SavingDetails/SavingDetails";
import Members from "./components/Members/Members";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions";
import Contacts from "./components/Contacts/Contacts";
import Navbar from './components/Navbar/Navbar';
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AdminLogin from "./components/AdminLogin/AdminLogin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="saving-details" element={<SavingDetails />} />
          <Route path="/members" element={<Members />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
