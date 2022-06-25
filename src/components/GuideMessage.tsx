import React, { useContext, useMemo } from "react";

import { OrderContext } from "../context/OrderContext";
import { CustomerChargeContext } from "../context/CustomerChargeContext";

import { ORDER_PROGRESS } from "../constants";
import menus from "../constants/menus";

const GuideMessage = () => {
  const {
    order: { progress, orderedMenu },
  } = useContext(OrderContext);
  const { customerCharge } = useContext(CustomerChargeContext);

  const guideText = useMemo(() => {
    switch (progress) {
      case ORDER_PROGRESS.PENDING:
        return customerCharge.value >=
          Math.min(...Object.keys(menus).map((menu) => menus[menu].price))
          ? "원하는 음료를 선택하세요."
          : "투입 금액이 부족하여 선택 가능한 음료가 없습니다.";
      case ORDER_PROGRESS.MAKING:
        return `${menus[orderedMenu].name} 준비 중...`;
      case ORDER_PROGRESS.COMPLETE:
        return `${menus[orderedMenu].name} 나왔습니다. 😉`;
      default:
    }
  }, [customerCharge.value, orderedMenu, progress]);

  return <p className="guide text">{guideText}</p>;
};

export default GuideMessage;
