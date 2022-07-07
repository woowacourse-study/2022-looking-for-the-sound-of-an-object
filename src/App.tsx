import React from "react";
import GuideMessage from "./components/GuideMessage";
import PaymentSection from "./components/PaymentSection";
import DrinkSection from "./components/DrinkSection";

import { OrderProvider } from "./context/OrderContext";
import { CustomerChargeProvider } from "./context/CustomerChargeContext";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>🧃 자판기 🧃</h1>
      </header>
      <main>
        <OrderProvider>
          <CustomerChargeProvider>
            <GuideMessage />
            <div className="sections-wrapper">
              <DrinkSection />
              <PaymentSection />
            </div>
          </CustomerChargeProvider>
        </OrderProvider>
      </main>
    </div>
  );
};

export default App;
