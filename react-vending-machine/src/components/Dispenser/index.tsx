import styled from "styled-components";

type DispenserType = {
  type: "음료" | "동전";
};

const StyledDispenser = styled.div<DispenserType>`
  width: ${({ type }) => (type === "동전" ? "120px" : "200px")};
  height: 100px;

  background-color: black;
  color: white;

  padding: 8px;
  border-radius: 4px;
`;

export default function Dispenser({ type }: DispenserType) {
  return (
    <StyledDispenser type={type}>
      <div>{type} 나오는 곳</div>
    </StyledDispenser>
  );
}
