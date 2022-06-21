import React, { useContext } from "react";
import { CustomerChargeContext } from "../../context/CustomerChargeContext";

const TakeChangeSection = () => {
  const { customerCharge, resetReturnedChange } = useContext(
    CustomerChargeContext
  );

  const handleClickTakeChangeButton = () => {
    resetReturnedChange();
  };

  return (
    <section className="pick-up-area">
      <h3 className="sr-only">잔돈 반환 영역</h3>
      <table className="table">
        <thead>
          <tr>
            <th>잔돈</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{customerCharge.returnedChangeValue}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="flexible-button"
        type="button"
        onClick={handleClickTakeChangeButton}
        disabled={customerCharge.returnedChangeValue <= 0}
      >
        잔돈 받아가기
      </button>
    </section>
  );
};

export default TakeChangeSection;
