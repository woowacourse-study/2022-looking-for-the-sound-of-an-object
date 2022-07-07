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
    returnedCoin: {
      coin_500: 0,
      coin_100: 0,
      coin_50: 0,
      coin_10: 0,
    },
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
    setCustomerCharge((prevState) => {
      let leftCustomerChargeValue = prevState.value;

      const coin_500 = Math.floor(leftCustomerChargeValue / 500);
      leftCustomerChargeValue = leftCustomerChargeValue - coin_500 * 500;
      const coin_100 = Math.floor(leftCustomerChargeValue / 100);
      leftCustomerChargeValue = leftCustomerChargeValue - coin_100 * 100;
      const coin_50 = Math.floor(leftCustomerChargeValue / 50);
      leftCustomerChargeValue = leftCustomerChargeValue - coin_50 * 50;
      const coin_10 = Math.floor(leftCustomerChargeValue / 10);
      leftCustomerChargeValue = leftCustomerChargeValue - coin_10 * 10;

      const newReturnedCoin = {
        coin_500: coin_500 + prevState.returnedCoin.coin_500,
        coin_100: coin_100 + prevState.returnedCoin.coin_100,
        coin_50: coin_50 + prevState.returnedCoin.coin_50,
        coin_10: coin_10 + prevState.returnedCoin.coin_10,
      };

      console.log(newReturnedCoin);

      return {
        value: 0,
        returnedCoin: newReturnedCoin,
      };
    });
  };

  const resetReturnedChange = () => {
    setCustomerCharge((prevState) => ({
      ...prevState,
      returnedCoin: {
        coin_500: 0,
        coin_100: 0,
        coin_50: 0,
        coin_10: 0,
      },
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
