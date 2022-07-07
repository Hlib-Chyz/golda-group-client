/* eslint-disable no-unused-vars */
import Footer from "@layouts/footer/footer";
import Header from "@layouts/header/header";
import Main from "@layouts/main/main";
import ContacrtOffer from "@pages/contract-offer/contract-offer";
import PrivacyPolicy from "@pages/privacy-policy/privacy-policy";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contacrtOffer" element={<ContacrtOffer />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
