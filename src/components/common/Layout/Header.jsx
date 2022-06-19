import { Outlet, useNavigate } from "react-router";
import styled from "styled-components";
import { COLORS } from "../../../style/theme";

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-around;
  background-color: ${COLORS.BLUE};
  margin-bottom: 4rem;
`;

const HeaderTitle = styled.h2`
  padding: 0;
  margin: 0.5rem 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-top: 0.7rem;
`;

const NavButton = styled.a`
  text-decoration: none;
  &:hover {
    color: ${COLORS.WHITE};
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer>
        <HeaderTitle>자판기 ☕️</HeaderTitle>
        <Nav>
          <NavButton
            onClick={() =>
              navigate("2022-looking-for-the-sound-of-an-object/store")
            }
          >
            재료충전
          </NavButton>
          <NavButton
            onClick={() => navigate("2022-looking-for-the-sound-of-an-object/")}
          >
            상품구매
          </NavButton>
        </Nav>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
