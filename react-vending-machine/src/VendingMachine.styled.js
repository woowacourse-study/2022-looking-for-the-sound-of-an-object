import styled from "styled-components";

const StyledVendingMachine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  height: 600px;

  margin: auto;

  border-radius: 4px;

  background-color: #a9cffc;
`;

const StyledMenus = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;

  padding: 8px;
  margin-top: 10px;

  border-radius: 4px;
  background-color: white;
`;

const StyledMoneyBox = styled.div`
  margin-top: 50px;
  align-self: flex-end;
  margin-right: 30px;
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

export { StyledVendingMachine, StyledMenus, StyledMoneyBox, StyledMoney };
