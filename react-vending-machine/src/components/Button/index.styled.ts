import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  :disabled {
    cursor: auto;
  }
`;

export default StyledButton;
