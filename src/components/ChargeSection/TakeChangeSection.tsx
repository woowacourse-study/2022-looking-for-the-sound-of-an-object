import React from "react";
import { useCustomerCharge } from "../../context/CustomerChargeContext";

const TakeChangeSection = () => {
  const { customerCharge, resetReturnedChange } = useCustomerCharge();

  const handleClickTakeChangeButton = () => {
    resetReturnedChange();
  };

  return (
    <section className="pick-up-area">
      <h3 className="sr-only">잔돈 반환 영역</h3>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>잔돈</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>500원</td>
            <td>{customerCharge.returnedCoin.coin_500}개</td>
          </tr>
          <tr>
            <td>100원</td>
            <td>{customerCharge.returnedCoin.coin_100}개</td>
          </tr>
          <tr>
            <td>50원</td>
            <td>{customerCharge.returnedCoin.coin_50}개</td>
          </tr>
          <tr>
            <td>10원</td>
            <td>{customerCharge.returnedCoin.coin_10}개</td>
          </tr>
        </tbody>
      </table>
      <button
        className="flexible-button"
        type="button"
        onClick={handleClickTakeChangeButton}
        disabled={Object.values(customerCharge.returnedCoin).every(
          (coinQuantity) => coinQuantity <= 0
        )}
      >
        잔돈 받아가기
      </button>
    </section>
  );
};

export default TakeChangeSection;
