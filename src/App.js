import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/common/Layout/Header";
import Store from "./components/pages/store";
import VendingMachine from "./components/pages/VendingMachine";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
