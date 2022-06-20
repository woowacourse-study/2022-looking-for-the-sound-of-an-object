import React, { useState, useEffect, useCallback } from "react";

import { ORDER_PROGRESS } from "../constants";
import menus from "./../constants/menus";

function GuideMessage({ customerCharge, order }) {
  const [guideText, setGuideText] = useState("");

  const updateOnOrderPending = useCallback(() => {
    setGuideText(
      customerCharge.value >=
        Math.min(...Object.keys(menus).map((menu) => menus[menu].price))
        ? "원하는 음료를 선택하세요."
        : "투입 금액이 부족하여 선택 가능한 음료가 없습니다."
    );
  }, [customerCharge.value]);

  const updateOnOrderMaking = (menu) => {
    setGuideText(`${menus[menu].name} 준비 중...`);
  };

  const updateOnOrderComplete = (menu) => {
    setGuideText(`${menus[menu].name} 나왔습니다. 😉`);
  };

  useEffect(() => {
    const { progress, orderedMenu } = order;

    switch (progress) {
      case ORDER_PROGRESS.PENDING:
        updateOnOrderPending();
        break;
      case ORDER_PROGRESS.MAKING:
        updateOnOrderMaking(orderedMenu);
        break;
      case ORDER_PROGRESS.COMPLETE:
        updateOnOrderComplete(orderedMenu);
        break;
      default:
    }
  }, [order, updateOnOrderPending]);

  useEffect(() => {
    if (order.progress === ORDER_PROGRESS.PENDING) {
      updateOnOrderPending();
    }
  }, [order.progress, updateOnOrderPending]);

  return <p className="guide text">{guideText}</p>;
}

export default GuideMessage;
