import React from "react";
import { ThemeProvider } from "styled-components";
import VendingMachine from "./VendingMachine";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <VendingMachine />
    </ThemeProvider>
  );
}
