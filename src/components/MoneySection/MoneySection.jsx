import OutlinedButton from "components/common/OutlinedButton/OutlinedButton";

import CardTerminalSection from "components/MoneySection/CardTerminalSection/CardTerminalSection";
import InsertMoneySection from "components/MoneySection/InsertMoneySection/InsertMoneySection";
import ReturnMoneySection from "components/MoneySection/ReturnMoneySection/ReturnMoneySection";

function MoneySection({
  inputMoney,
  paymentMethod,
  cardTerminalMessage,
  addInputMoney,
  changeInputMoney,
  setPaymentMethod,
  updateCardTerminal,
}) {
  const handleClickCashButton = () => {
    setPaymentMethod("cash");
  };

  const handleClickCardButton = () => {
    if (inputMoney > 0) {
      alert(
        "이미 투입된 금액이 있습니다. 금액을 반환한 후 방식을 변경해주세요."
      );
      return;
    }
    setPaymentMethod("card");
  };

  return (
    <div>
      <div>
        <label>지불 방식을 선택해주세요.</label>
        <OutlinedButton
          disabled={paymentMethod === "cash"}
          onClick={handleClickCashButton}
        >
          현금
        </OutlinedButton>
        <OutlinedButton
          disabled={paymentMethod === "card"}
          onClick={handleClickCardButton}
        >
          카드
        </OutlinedButton>
      </div>
      {paymentMethod === "cash" ? (
        <>
          <InsertMoneySection
            inputMoney={inputMoney}
            addInputMoney={addInputMoney}
          />
          <ReturnMoneySection
            inputMoney={inputMoney}
            changeInputMoney={changeInputMoney}
          />
        </>
      ) : (
        <CardTerminalSection
          cardTerminalMessage={cardTerminalMessage}
          updateCardTerminal={updateCardTerminal}
        />
      )}
    </div>
  );
}

export default MoneySection;
