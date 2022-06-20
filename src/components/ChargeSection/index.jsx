import React from "react";
import ChargeAmountSection from "./ChargeAmountSection";
import TakeChangeSection from "./TakeChangeSection";

function ChargeSection({
  customerCharge,
  order,
  addCustomerCharge,
  returnAllCustomerCharge,
  resetReturnedChange,
}) {
  return (
    <section className="charge-section">
      <h2 className="sr-only">금액 충전 및 잔돈 반환 영역</h2>
      <ChargeAmountSection
        customerCharge={customerCharge}
        addCustomerCharge={addCustomerCharge}
        returnAllCustomerCharge={returnAllCustomerCharge}
      />
      <TakeChangeSection
        customerCharge={customerCharge}
        resetReturnedChange={resetReturnedChange}
      />
    </section>
  );
}

export default ChargeSection;
