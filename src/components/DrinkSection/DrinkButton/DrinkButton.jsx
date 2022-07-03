import * as S from "components/DrinkSection/DrinkButton/DrinkButton.style";

function DrinkButton({ name, price, onClick, disabled, children }) {
  return (
    <S.ButtonContainer>
      <S.Button type="button" name={name} onClick={onClick} disabled={disabled}>
        {children}
      </S.Button>
      <S.ButtonText>{price.toLocaleString()}원</S.ButtonText>
    </S.ButtonContainer>
  );
}

export default DrinkButton;
