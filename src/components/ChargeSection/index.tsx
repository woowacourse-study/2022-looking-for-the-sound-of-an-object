import React from "react";
import ChargeAmountSection from "./ChargeAmountSection";
import TakeChangeSection from "./TakeChangeSection";

const ChargeSection = () => {
  return (
    <section className="charge-section">
      <h2 className="sr-only">금액 충전 및 잔돈 반환 영역</h2>
      <ChargeAmountSection />
      <TakeChangeSection />
    </section>
  );
};

export default ChargeSection;
