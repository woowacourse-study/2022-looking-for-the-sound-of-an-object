import React, { useState } from "react";
import { usePayment } from "../../context/PaymentContext";

const ChargeAmountSection = () => {
  const {
    isOnCardPayment,
    customerCharge,
    addCustomerCharge,
    returnAllCustomerCharge,
  } = usePayment();
  const [chargeAmount, setChargeAmount] = useState(0);

  const handleChangeChargeAmountInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChargeAmount(e.target.valueAsNumber);
  };

  const handleSubmitCustomerChargeForm = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setChargeAmount(0);
    addCustomerCharge(chargeAmount);
  };

  const handleClickReturnChangeButton = () => {
    returnAllCustomerCharge();
  };

  return (
    <section>
      <h3 className="sr-only">현금 충전</h3>
      <form onSubmit={handleSubmitCustomerChargeForm}>
        <label form="customer-charge-form">
          금액을 투입하세요. <br />
          (1,000원 단위)
        </label>
        <div className="flex-row-space-between-container">
          <input
            type="number"
            placeholder="1000"
            step="1000"
            value={chargeAmount}
            min="1000"
            max="10000"
            onChange={handleChangeChargeAmountInput}
            disabled={isOnCardPayment}
            required
          />
          <button className="small-button" disabled={isOnCardPayment}>
            충전
          </button>
        </div>
      </form>
      <div className="flex-row-space-between-container">
        <p>
          현재 투입 금액: <span>{customerCharge.value}</span>원
        </p>
        <button
          className="small-button"
          onClick={handleClickReturnChangeButton}
          disabled={customerCharge.value <= 0}
        >
          잔돈 반환
        </button>
      </div>
    </section>
  );
};

export default ChargeAmountSection;
