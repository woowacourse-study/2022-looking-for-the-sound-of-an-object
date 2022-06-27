import * as S from "components/layout/Header/Header.style";

function Header({ children }) {
  return (
    <S.HeaderContainer>
      <S.Title>{children}</S.Title>
    </S.HeaderContainer>
  );
}

export default Header;
