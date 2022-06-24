import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.white};
  text-shadow: -0.13rem 0 ${({ theme }) => theme.black},
    0 0.13rem ${({ theme }) => theme.black},
    0.13rem 0 ${({ theme }) => theme.black},
    0 -0.13rem ${({ theme }) => theme.black},
    0.13rem 0.13rem 0 ${({ theme }) => theme.primaryDark},
    0.2rem 0.2rem 0 ${({ theme }) => theme.primaryDark},
    0.3rem 0.3rem 0 ${({ theme }) => theme.black},
    0.4rem 0.4rem 0 ${({ theme }) => theme.black};
`;
