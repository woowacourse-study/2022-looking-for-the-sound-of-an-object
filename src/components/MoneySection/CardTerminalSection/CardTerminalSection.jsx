import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

function CardTerminalSection() {
  const [message, setMessage] = useState("카드 인식 중...");
  const timeIdRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      timeIdRef.current = setMessage("카드가 인식되었습니다.");
    }, 2000);
  }, []);

  return (
    <section>
      <SectionHeader>단말기</SectionHeader>
      <p>단말기에 카드를 대주세요.</p>
      <p>{message}</p>
    </section>
  );
}

export default CardTerminalSection;
