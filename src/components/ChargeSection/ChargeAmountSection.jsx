import React, { useContext, useState } from "react";
import { CustomerChargeContext } from "../../context/CustomerChargeContext";

const ChargeAmountSection = () => {
  const { customerCharge, addCustomerCharge, returnAllCustomerCharge } =
    useContext(CustomerChargeContext);
  const [chargeAmount, setChargeAmount] = useState(0);

  const handleChangeChargeAmountInput = (e) => {
    setChargeAmount(Number(e.target.value));
  };

  const handleSubmitCustomerChargeForm = (e) => {
    e.preventDefault();
    addCustomerCharge(chargeAmount);
  };

  const handleClickReturnChangeButton = (e) => {
    returnAllCustomerCharge();
  };

  return (
    <section className="form-container">
      <h3 className="sr-only">음료 구입을 위한 금액 충전 영역</h3>
      <form onSubmit={handleSubmitCustomerChargeForm}>
        <label form="customer-charge-form">
          금액을 투입하세요. (1,000원 단위)
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
            required
          />
          <button className="small-button">충전</button>
        </div>
      </form>
      <div className="flex-row-space-between-container">
        <p>
          현재 투입 금액: <span>{customerCharge.value}</span>원
        </p>
        <button
          className="small-button"
          onClick={handleClickReturnChangeButton}
        >
          잔돈 반환
        </button>
      </div>
    </section>
  );
};

export default ChargeAmountSection;
