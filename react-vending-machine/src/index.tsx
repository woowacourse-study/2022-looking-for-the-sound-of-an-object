import React from "react";
import ReactDOM from "react-dom/client";
import VendingMachine from "./VendingMachine";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <VendingMachine />
  </React.StrictMode>
);
