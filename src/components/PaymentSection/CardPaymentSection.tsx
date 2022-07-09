import React from "react";
import { usePayment } from "../../context/PaymentContext";

const CardPaymentSection = () => {
  const { isOnCardPayment, setIsOnCardPayment, customerCharge } = usePayment();

  return (
    <section className="payment-area">
      <h3 className="sr-only">카드 결제</h3>
      <button
        className="card-payment-button"
        onClick={() => {
          if (customerCharge.value) {
            alert(
              "충전된 금액이 있습니다.\n충전금을 반환 받은 후 카드 결제를 시도해주세요."
            );
            return;
          }
          setIsOnCardPayment((prevState: boolean) => !prevState);
        }}
      >
        {isOnCardPayment ? "💳 카드 결제 취소" : "💳 카드 결제"}
      </button>
    </section>
  );
};

export default CardPaymentSection;
