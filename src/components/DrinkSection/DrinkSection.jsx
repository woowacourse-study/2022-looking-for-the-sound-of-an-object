import ActionListItem from "./ActionListItem/ActionListItem";

import { DISPENSER_TIME_INTERVAL } from "constants";

import { useDispenser } from "hooks/useDispenser";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

import DrinkButtonSection from "components/DrinkSection/DrinkButtonSection/DrinkButtonSection";
import * as S from "components/DrinkSection/DrinkSection.style";

function DrinkSection({ inputMoney, addInputMoney, subtractInputMoney }) {
  const { dispenserAction, resetDispenserAction, addDispenserAction } =
    useDispenser(DISPENSER_TIME_INTERVAL);

  return (
    <div>
      <DrinkButtonSection
        addDispenserAction={addDispenserAction}
        resetDispenserAction={resetDispenserAction}
        inputMoney={inputMoney}
        addInputMoney={addInputMoney}
        subtractInputMoney={subtractInputMoney}
      />
      <S.SectionConatainer>
        <SectionHeader>디스펜서</SectionHeader>
        <S.ActionList>
          {dispenserAction.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
        </S.ActionList>
      </S.SectionConatainer>
    </div>
  );
}

export default DrinkSection;
