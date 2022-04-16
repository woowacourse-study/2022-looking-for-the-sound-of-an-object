import { CHARGE_MONEY_RULE, MESSAGE } from '../constants/index.js';

const isEmptyMoney = money => !money;

const isMoneyRanged = money =>
  money < CHARGE_MONEY_RULE.MIN || money > CHARGE_MONEY_RULE.MAX;

const generateChargeMoneyValidators = chargeMoney => [
  {
    test: isEmptyMoney(chargeMoney),
    errorMsg: MESSAGE.ERROR_EMPTY_CHARGE_MONEY,
  },
  {
    test: isMoneyRanged(chargeMoney),
    errorMsg: MESSAGE.ERROR_RANGED_CHARGE_MONEY,
  },
];

const validateChargeMoney = chargeMoney => {
  const validator = generateChargeMoneyValidators(chargeMoney);

  return validator.every(({ test, errorMsg }) => {
    if (test) {
      throw new Error(errorMsg);
    }
    return true;
  });
};

export { validateChargeMoney };
