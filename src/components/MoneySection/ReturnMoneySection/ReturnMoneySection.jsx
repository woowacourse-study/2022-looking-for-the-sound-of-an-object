import { useState } from "react";

import { COIN_UNIT } from "constants";

import OutlinedButton from "components/common/OutlinedButton/OutlinedButton";
import SectionHeader from "components/common/SectionHeader/SectionHeader";

import * as S from "components/MoneySection/ReturnMoneySection/ReturnMoneySection.style";

const initialChangeState = {
  [COIN_UNIT[500]]: 0,
  [COIN_UNIT[100]]: 0,
  [COIN_UNIT[50]]: 0,
  [COIN_UNIT[10]]: 0,
};

function ReturnMoneySection({ inputMoney, changeInputMoney }) {
  const [changes, setChanges] = useState(initialChangeState);

  const returnMoney = () => {
    if (inputMoney <= 0) {
      alert("반환할 돈이 없습니다.");
      return;
    }

    const [counts, leftMoney] = Object.values(COIN_UNIT)
      .sort((a, b) => b - a)
      .reduce(
        (acc, unitValue) => {
          acc[0][unitValue] = Math.floor(acc[1] / unitValue);
          acc[1] %= unitValue;
          return acc;
        },
        [initialChangeState, inputMoney]
      );
    setChanges(counts);
    changeInputMoney(leftMoney);
  };

  const totalChanges = Object.entries(changes).reduce(
    (acc, [unit, count]) => acc + unit * count,
    0
  );

  return (
    <S.SectionContainer>
      <SectionHeader>금액 반환구</SectionHeader>
      <OutlinedButton type="button" onClick={returnMoney}>
        반환하기
      </OutlinedButton>
      <S.TotalReturnMoneyText>
        반환한 금액: <span>{totalChanges.toLocaleString()}</span>원
      </S.TotalReturnMoneyText>
      <S.ReturnMoneyTable>
        <tr>
          <th scope="row">500원</th>
          <td>{changes[COIN_UNIT[500]]}개</td>
        </tr>
        <tr>
          <th scope="row">100원</th>
          <td>{changes[COIN_UNIT[100]]}개</td>
        </tr>
        <tr>
          <th scope="row">50원</th>
          <td>{changes[COIN_UNIT[50]]}개</td>
        </tr>
        <tr>
          <th scope="row">10원</th>
          <td>{changes[COIN_UNIT[10]]}개</td>
        </tr>
      </S.ReturnMoneyTable>
    </S.SectionContainer>
  );
}

export default ReturnMoneySection;
