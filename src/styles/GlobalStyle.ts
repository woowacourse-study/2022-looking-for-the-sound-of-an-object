import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    border: none;

    cursor: pointer;
  }
`;

export default GlobalStyle;
