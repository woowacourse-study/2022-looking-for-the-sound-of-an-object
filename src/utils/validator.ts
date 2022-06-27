import { CHANGE_RULES } from 'constants/rules';

const validateChangeInput = (change: number) => {
  if (!change || change % CHANGE_RULES.UNIT !== 0) {
    throw new Error(`${CHANGE_RULES.UNIT}원 단위로 입력해주세요.`);
  }
};

export { validateChangeInput };
