import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CoinInsert from "./CoinInsert";
import CoinReturn from "./CoinReturn";
import MenuSelect from "./MenuSelect";
import NowSelling from "./NowSelling";

const VendingMachineContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const VendingMachine = () => {
  return (
    <VendingMachineContainer>
      <NowSelling />
      <CoinInsert />
      <MenuSelect />
      <CoinReturn />
    </VendingMachineContainer>
  );
};

export default VendingMachine;
