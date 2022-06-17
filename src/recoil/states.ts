import { atom } from 'recoil';

import { DISPENSER_STATE } from 'constants/dispenser';

const guideState = atom({
  key: 'guideState',
  default: '음료를 골라주세요.',
});

const changeState = atom({
  key: 'changeState',
  default: 0,
});

const dispenserState = atom({
  key: 'dispenserState',
  default: DISPENSER_STATE.EMPTY,
});

export { guideState, changeState, dispenserState };
