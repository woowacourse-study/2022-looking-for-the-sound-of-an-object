import styled from "styled-components";

const StyledVendingMachine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 600px;

  margin: auto;

  border: 1px solid black;
  border-radius: 4px;
`;

const Menus = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const StyledMoneyBox = styled.div`
  margin-top: 50px;
`;

const StyledMoney = styled.div`
  display: flex;
  gap: 3px;

  margin-top: 10px;

  button {
    width: 40px;
    height: 40px;

    border: 1px solid black;
    border-radius: 50%;
  }
`;

export { StyledVendingMachine, Menus, StyledMoneyBox, StyledMoney };
