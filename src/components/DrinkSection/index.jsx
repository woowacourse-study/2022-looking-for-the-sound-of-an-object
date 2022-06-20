import { DISPENSER_TIME_INTERVAL } from "constants";

import { useHandleDispenser } from "hooks/useHandleDispenser";

import DrinkButtonSection from "components/DrinkSection/DrinkButtonSection";

function DrinkSection({ inputMoney, setInputMoney }) {
  const { dispenserAction, handleDispenser, setDispenserAction } =
    useHandleDispenser(DISPENSER_TIME_INTERVAL);

  return (
    <>
      <DrinkButtonSection
        handleDispenser={handleDispenser}
        setDispenserAction={setDispenserAction}
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
      />
      <section>
        <h2>디스펜서</h2>
        {dispenserAction.map((action, index) => (
          <p key={index}>{action}</p>
        ))}
      </section>
    </>
  );
}

export default DrinkSection;
