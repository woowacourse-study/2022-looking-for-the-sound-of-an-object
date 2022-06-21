import { createContext } from "react";
import useCustomerCharge from "../hooks/useCustomerCharge";

export const CustomerChargeContext = createContext({
  customerCharge: null,
  addCustomerCharge: null,
  subtractCustomerCharge: null,
  returnAllCustomerCharge: null,
  resetReturnedChange: null,
});

export const CustomerChargeProvider = ({ children }) => {
  const {
    customerCharge,
    addCustomerCharge,
    subtractCustomerCharge,
    returnAllCustomerCharge,
    resetReturnedChange,
  } = useCustomerCharge();

  return (
    <CustomerChargeContext.Provider
      value={{
        customerCharge,
        addCustomerCharge,
        subtractCustomerCharge,
        returnAllCustomerCharge,
        resetReturnedChange,
      }}
    >
      {children}
    </CustomerChargeContext.Provider>
  );
};
