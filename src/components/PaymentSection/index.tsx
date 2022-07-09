import React from "react";
import CardPaymentSection from "./CardPaymentSection";
import CashPaymentSection from "./CashPaymentSection";

const PaymentSection = () => {
  return (
    <section className="charge-section">
      <h2 className="sr-only">결제 영역</h2>
      <CardPaymentSection />
      <CashPaymentSection />
    </section>
  );
};

export default PaymentSection;
