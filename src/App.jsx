import GuideMessage from "./components/GuideMessage";
import ChargeSection from "./components/ChargeSection";
import DrinkSection from "./components/DrinkSection";

import useCustomerCharge from "./hooks/useCustomerCharge";
import { OrderProvider } from "./context/OrderContext";

const App = () => {
  const {
    customerCharge,
    addCustomerCharge,
    subtractCustomerCharge,
    returnAllCustomerCharge,
    resetReturnedChange,
  } = useCustomerCharge();

  return (
    <div className="app">
      <header>
        <h1>🧃 자판기 🧃</h1>
      </header>
      <main>
        <OrderProvider>
          <GuideMessage customerCharge={customerCharge} />
          <div className="sections-wrapper">
            <DrinkSection
              customerCharge={customerCharge}
              subtractCustomerCharge={subtractCustomerCharge}
            />

            <ChargeSection
              customerCharge={customerCharge}
              addCustomerCharge={addCustomerCharge}
              returnAllCustomerCharge={returnAllCustomerCharge}
              resetReturnedChange={resetReturnedChange}
            />
          </div>
        </OrderProvider>
      </main>
    </div>
  );
};

export default App;
