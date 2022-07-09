import React from "react";
import { usePayment } from "../../context/PaymentContext";

const CardPaymentSection = () => {
  const { isOnCardPayment, setIsOnCardPayment } = usePayment();

  return (
    <section className="payment-area">
      <h3>카드 결제</h3>
      <button
        className="card-payment-button"
        onClick={() => {
          setIsOnCardPayment((prevState: boolean) => !prevState);
        }}
      >
        {isOnCardPayment ? "💳 카드 결제 취소" : "💳 카드 결제"}
      </button>
    </section>
  );
};

export default CardPaymentSection;
