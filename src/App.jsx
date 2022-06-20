import GuideMessage from "./components/GuideMessage";
import ChargeSection from "./components/ChargeSection";
import DrinkSection from "./components/DrinkSection";

import useCustomerCharge from "./hooks/useCustomerCharge";
import useOrder from "./hooks/useOrder";

function App() {
  const {
    customerCharge,
    addCustomerCharge,
    subtractCustomerCharge,
    returnAllCustomerCharge,
    resetReturnedChange,
  } = useCustomerCharge();

  const {
    order,
    updateOrderStateToPending,
    updateOrderStateToMaking,
    updateOrderStateToComplete,
  } = useOrder();

  return (
    <div className="app">
      <header>
        <h1>🧃 자판기 🧃</h1>
      </header>
      <main>
        <GuideMessage customerCharge={customerCharge} order={order} />
        <div className="sections-wrapper">
          <DrinkSection
            customerCharge={customerCharge}
            order={order}
            subtractCustomerCharge={subtractCustomerCharge}
            updateOrderStateToPending={updateOrderStateToPending}
            updateOrderStateToMaking={updateOrderStateToMaking}
            updateOrderStateToComplete={updateOrderStateToComplete}
          />
          <ChargeSection
            customerCharge={customerCharge}
            order={order}
            addCustomerCharge={addCustomerCharge}
            returnAllCustomerCharge={returnAllCustomerCharge}
            resetReturnedChange={resetReturnedChange}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
