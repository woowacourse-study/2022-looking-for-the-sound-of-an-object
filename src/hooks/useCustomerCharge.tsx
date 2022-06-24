import { useState } from "react";
import { CustomerCharge } from "../type";

const useCustomerCharge = () => {
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

  return {
    customerCharge,
    addCustomerCharge,
    subtractCustomerCharge,
    returnAllCustomerCharge,
    resetReturnedChange,
  };
};

export default useCustomerCharge;
