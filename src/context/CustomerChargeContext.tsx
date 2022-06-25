import React, { createContext } from "react";
import useCustomerCharge from "../hooks/useCustomerCharge";
import { CustomerCharge } from "../type";

interface CustomerChargeContextInterface {
  customerCharge: CustomerCharge;
  addCustomerCharge: (chargeToAdd: number) => void;
  subtractCustomerCharge: (chargeToSubtract: number) => void;
  returnAllCustomerCharge: () => void;
  resetReturnedChange: () => void;
}

export const CustomerChargeContext =
  createContext<CustomerChargeContextInterface | null>(null);

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
