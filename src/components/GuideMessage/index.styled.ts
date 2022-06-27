import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0%, 100% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }
`;

const GuideMessageWrapper = styled.div`
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

const GuideMessage = styled.span`
  animation: ${show} 3s linear infinite;
`;

export { GuideMessageWrapper, GuideMessage };
