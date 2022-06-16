import { useState } from "react";

import { COIN_UNIT } from "../../constants";

const initialChangeState = {
  [COIN_UNIT[500]]: 0,
  [COIN_UNIT[100]]: 0,
  [COIN_UNIT[50]]: 0,
  [COIN_UNIT[10]]: 0,
};

function ReturnMoneySection({ inputMoney, setInputMoney }) {
  const [changes, setChanges] = useState(initialChangeState);

  const returnMoney = () => {
    if (inputMoney <= 0) {
      alert("반환할 돈이 없습니다.");
      return;
    }

    let leftMoney = inputMoney;
    let counts = initialChangeState;
    Object.keys(COIN_UNIT)
      .sort((a, b) => b - a)
      .forEach((unit) => {
        counts[COIN_UNIT[unit]] = Math.floor(leftMoney / COIN_UNIT[unit]);
        leftMoney %= COIN_UNIT[unit];
      });
    setChanges(counts);
    setInputMoney(leftMoney);
  };

  const totalChanges = Object.entries(changes).reduce(
    (acc, [unit, count]) => acc + unit * count,
    0
  );

  return (
    <section>
      <h2>금액 반환구</h2>
      <button type="button" onClick={returnMoney}>
        반환하기
      </button>
      <p>
        반환한 금액: <span>{totalChanges.toLocaleString()}</span>원 <br />
        500원: <span>{changes[COIN_UNIT[500]]}</span>개 <br />
        100원: <span>{changes[COIN_UNIT[100]]}</span>개 <br />
        50원: <span>{changes[COIN_UNIT[50]]}</span>개 <br />
        10원: <span>{changes[COIN_UNIT[10]]}</span>개 <br />
      </p>
    </section>
  );
}

export default ReturnMoneySection;
