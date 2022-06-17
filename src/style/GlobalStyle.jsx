import { createGlobalStyle } from "styled-components";
import { COLORS } from "./theme";

const GlobalStyle = createGlobalStyle`
    body{
        width: 1000px;
        font-family: 'Gmarket';
        background-color: ${COLORS.WHITE};
        border: 1px solid black;
        border-radius: 0.8rem;
    }
`;

export default GlobalStyle;
