import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
  }

  button {
    border: none;

    cursor: pointer;
  }
`;

export default GlobalStyle;
