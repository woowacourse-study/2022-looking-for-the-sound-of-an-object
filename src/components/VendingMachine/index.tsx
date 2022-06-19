import React from 'react';
import Button from 'components/Button';
import Dispenser from 'components/Dispenser';
import ChangeBox from 'components/ChangeBox';
import { BEVERAGE, VENDING_MACHINE_STATUS } from 'constant';
import { validateMoney, isNumber, handleEnterEvent, changeCoins } from 'utils';
import {
  isErrorWithMessage,
  TCoin,
  TMenuInfo,
  TVendingMachineStatus,
} from 'type';
import { useState } from 'react';
import * as S from './style';

const VendingMachine = () => {
  const [moneyInput, setMoneyInput] = useState('');
  const [chargedMoney, setChargedMoney] = useState(0);
  const [changes, setChanges] = useState<TCoin>();

  const [status, setStatus] = useState<TVendingMachineStatus>(
    VENDING_MACHINE_STATUS.REST,
  );
  const [orderedMenu, setOrderedMenu] = useState<TMenuInfo | undefined>();

  const handleChangeInput = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if (!isNumber(value)) return;
    setMoneyInput(value);
  };

  const handleChargeMoney = () => {
    try {
      const money = Number(moneyInput);
      validateMoney(money);
      setChargedMoney(money + chargedMoney);
      setMoneyInput('');
    } catch (error) {
      if (isErrorWithMessage(error)) {
        alert(error.message);
      }
    }
  };

  const handleOrderMenu = (id: number) => () => {
    const orderedMenu = BEVERAGE.find((menu) => menu.id === id);
    if (!orderedMenu) return;
    setOrderedMenu({
      name: orderedMenu.name,
      ingredients: orderedMenu.ingredients,
    });

    setChargedMoney((prevState) => prevState - orderedMenu.price);
    setStatus(VENDING_MACHINE_STATUS.SERVING);
  };

  const handlePickUpBeverage = () => {
    setOrderedMenu(undefined);
    setStatus(VENDING_MACHINE_STATUS.REST);
  };

  const handleChangeMoney = () => {
    const newChanges = changeCoins(chargedMoney);
    setChargedMoney(0);
    setChanges(newChanges);
  };

  return (
    <S.Container>
      <S.Title>🌱 나는야 짱판기 🌱</S.Title>
      <S.FlexRow>
        <S.Input
          placeholder="💰 투입할 금액을 입력하세요 🧐"
          value={moneyInput}
          onChange={handleChangeInput}
          onKeyDown={handleEnterEvent(handleChargeMoney)}
        />
        <Button buttonStyle="primary" type="button" onClick={handleChargeMoney}>
          투입
        </Button>
      </S.FlexRow>
      <S.ChargedMoneyDescription>
        💰 투입된 금액 : {chargedMoney} 원 💰
      </S.ChargedMoneyDescription>

      <S.FlexRow>
        {BEVERAGE.map(({ id, name, price }) => (
          <Button
            key={id}
            buttonStyle="secondary"
            type="button"
            disabled={
              chargedMoney < price || status !== VENDING_MACHINE_STATUS.REST
            }
            onClick={handleOrderMenu(id)}
          >
            {name} / {price}원
          </Button>
        ))}
      </S.FlexRow>
      <S.FlexRow>
        <Dispenser
          orderedMenu={orderedMenu}
          handleSetFinished={() => setStatus(VENDING_MACHINE_STATUS.SERVED)}
        />
        <ChangeBox coins={changes} />
      </S.FlexRow>
      <S.FlexRow>
        <Button
          buttonStyle="primary"
          type="button"
          onClick={handlePickUpBeverage}
          disabled={status !== VENDING_MACHINE_STATUS.SERVED}
        >
          가져가기
        </Button>
        <Button
          buttonStyle="secondary"
          type="button"
          onClick={handleChangeMoney}
          disabled={chargedMoney === 0}
        >
          동전 반환하기
        </Button>
      </S.FlexRow>
    </S.Container>
  );
};

export default VendingMachine;
