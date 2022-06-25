import styled from "styled-components";

const StyledMenu = styled.div<{ lightOn?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 28px;

  div {
    font-size: 14px;
  }

  button {
    width: 80px;
    height: 30px;

    background-color: ${({ lightOn }) => (lightOn ? "#3e93f7" : "#dddddd")};
    color: ${({ lightOn }) => lightOn && "white"};

    border-radius: 4px;

    :hover:enabled {
      filter: brightness(130%);
    }
  }
`;

export { StyledMenu };
