import React from "react";
import ChargeAmountSection from "./ChargeAmountSection";
import TakeChangeSection from "./TakeChangeSection";

const CashPaymentSection = () => {
  return (
    <section className="payment-area">
      <h3>현금 결제</h3>
      <ChargeAmountSection />
      <TakeChangeSection />
    </section>
  );
};

export default CashPaymentSection;
