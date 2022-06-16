import styled from "styled-components";

const StyledMoneyInput = styled.form`
  input {
    width: 70px;
    padding: 5px;

    margin: 3px;
    background-color: transparent;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:focus {
    outline: none;
  }
`;

export default StyledMoneyInput;
