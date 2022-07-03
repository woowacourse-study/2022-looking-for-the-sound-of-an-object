import * as S from "components/common/OutlinedButton/OutlinedButton.style";

function OutlinedButton({ type = "submit", onClick, children, ...rest }) {
  return (
    <S.Button type={type} onClick={onClick} {...rest}>
      {children}
    </S.Button>
  );
}

export default OutlinedButton;
