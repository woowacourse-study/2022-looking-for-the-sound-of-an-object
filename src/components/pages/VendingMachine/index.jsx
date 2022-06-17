import styled from "styled-components";
import CoinInsert from "./CoinInsert";
import CoinReturn from "./CoinReturn";
import DrinkDispenser from "./DrinkDispenser";
import MenuSelect from "./MenuSelect";
import NowSelling from "./NowSelling";

const VendingMachineContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const VendingMachine = () => {
  const amount = 0;

  return (
    <VendingMachineContainer>
      <NowSelling />
      <CoinInsert amount={amount} />
      <MenuSelect />
      <DrinkDispenser />
      <CoinReturn />
    </VendingMachineContainer>
  );
};

export default VendingMachine;
