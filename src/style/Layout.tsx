import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.GREY_100};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Layout;
