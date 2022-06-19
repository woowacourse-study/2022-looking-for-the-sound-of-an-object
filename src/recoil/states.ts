import { atom } from 'recoil';

import { DISPENSER_STATE } from 'constants/dispenser';

const guideState = atom<string>({
  key: 'guideState',
  default: '음료를 골라주세요.',
});

const changeState = atom<number>({
  key: 'changeState',
  default: 0,
});

const dispenserState = atom<
  typeof DISPENSER_STATE[keyof typeof DISPENSER_STATE]
>({
  key: 'dispenserState',
  default: DISPENSER_STATE.EMPTY,
});

export { guideState, changeState, dispenserState };
