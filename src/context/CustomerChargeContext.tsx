import React, { createContext, useState, useContext } from "react";
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

export const CustomerChargeProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [customerCharge, setCustomerCharge] = useState<CustomerCharge>({
    value: 0,
    returnedChangeValue: 0,
  });

  const addCustomerCharge = (chargeToAdd: number) => {
    setCustomerCharge((prevState) => ({
      ...prevState,
      value: prevState.value + chargeToAdd,
    }));
  };

  const subtractCustomerCharge = (chargeToSubtract: number) => {
    setCustomerCharge((prevState) => ({
      ...prevState,
      value: prevState.value - chargeToSubtract,
    }));
  };

  const returnAllCustomerCharge = () => {
    setCustomerCharge((prevState) => ({
      returnedChangeValue: prevState.returnedChangeValue + prevState.value,
      value: 0,
    }));
  };

  const resetReturnedChange = () => {
    setCustomerCharge((prevState) => ({
      ...prevState,
      returnedChangeValue: 0,
    }));
  };

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

export const useCustomerCharge = () => {
  const context = useContext(CustomerChargeContext);
  if (context === undefined) {
    throw new Error(
      "useCustomerCharge must be used within a CustomerChargeProvider"
    );
  }
  return context;
};
