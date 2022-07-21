/* eslint-disable no-unused-vars */
import Footer from "@layouts/footer/footer";
import Header from "@layouts/header/header";
import Main from "@layouts/main/main";
import ContacrtOffer from "@pages/contract-offer/contract-offer";
import DeliveryPayment from "@pages/delivery-payment/delivery-payment";
import OrderForm from "@pages/order-form/order-form";
import PrivacyPolicy from "@pages/privacy-policy/privacy-policy";
import { RefObject, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface Refs {
  courseProgramRef: RefObject<HTMLDivElement>;
  tariffsRef: RefObject<HTMLDivElement>;
  aboutUsRef: RefObject<HTMLDivElement>;
}

function App(): JSX.Element {
  const courseProgramRef = useRef<HTMLDivElement>(null);
  const tariffsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <BrowserRouter>
        <div
          style={{
            minHeight: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <Header refs={{ courseProgramRef, tariffsRef, aboutUsRef }} />
          </div>
          <div
            style={{
              flex: "1 1 auto",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <Main refs={{ courseProgramRef, tariffsRef, aboutUsRef }} />
                }
              />
              <Route path="/contacrtOffer" element={<ContacrtOffer />} />
              <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/deliveryPayment" element={<DeliveryPayment />} />
              <Route path="/orderForm" element={<OrderForm />} />
              <Route
                path="*"
                element={
                  <Main refs={{ courseProgramRef, tariffsRef, aboutUsRef }} />
                }
              />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
