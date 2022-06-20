const validateChangeInput = (change: number) => {
  if (!change || change % 500 !== 0) {
    throw new Error('500원 단위로 입력해주세요.');
  }
};

export { validateChangeInput };
