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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  padding: 8px;
  margin-top: 10px;

  border-radius: 4px;
  background-color: white;
`;

const StyledMoneyBox = styled.div`
  margin: 50px 30px 30px 0;
  align-self: flex-end;
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

const StyledDispensers = styled.div`
  display: flex;
  gap: 20px;
`;

export {
  StyledVendingMachine,
  StyledMenus,
  StyledMoneyBox,
  StyledMoney,
  StyledDispensers,
};
