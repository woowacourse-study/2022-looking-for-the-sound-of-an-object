import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Header from "./components/common/Layout/Header";
import Store from "./components/pages/store";
import VendingMachine from "./components/pages/VendingMachine";
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/store" element={<Store />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
