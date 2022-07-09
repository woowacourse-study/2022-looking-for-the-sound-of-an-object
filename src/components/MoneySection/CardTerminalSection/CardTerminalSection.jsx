import { useEffect } from "react";

import SectionHeader from "components/common/SectionHeader/SectionHeader";

function CardTerminalSection({ cardTerminalMessage, updateCardTerminal }) {
  useEffect(() => {
    updateCardTerminal();
  }, []);

  return (
    <section>
      <SectionHeader>단말기</SectionHeader>
      <p>단말기에 카드를 대주세요.</p>
      <p>{cardTerminalMessage}</p>
    </section>
  );
}

export default CardTerminalSection;
