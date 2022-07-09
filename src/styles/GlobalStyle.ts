import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-family: 'MapoPeacefull', sans-serif;
  }

  button {
    border: none;

    cursor: pointer;
  }

  @font-face {
    font-family: 'MapoPeacefull';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoPeacefullA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;
