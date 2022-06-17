import styled from 'styled-components';

const GuideMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 40px;

  border: none;
  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.black001};
  color: ${({ theme: { colors } }) => colors.white001};

  font-size: 16px;
`;

export { GuideMessage };
