const snackBar = () => {
  const snackBarElement = document.querySelector('.snack-bar');
  let isExistSnackBar = null;

  return mention => {
    if (isExistSnackBar) return;
    snackBarElement.textContent = mention;
    snackBarElement.classList.add('is-active');

    isExistSnackBar = setTimeout(() => {
      snackBarElement.classList.remove('is-active');
      clearTimeout(isExistSnackBar);
      isExistSnackBar = null;
    }, 3000);
  };
};

export const showSnackBar = snackBar();
