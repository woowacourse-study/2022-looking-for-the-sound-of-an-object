import { $ } from './dom.js';

const showSnackbar = message => {
  const $snackbar = document.createElement('div');
  $snackbar.classList.add('snackbar');
  $snackbar.classList.add('show');
  $snackbar.textContent = message;

  const $snackbarContainer = $('#snackbar-container');
  $snackbarContainer.append($snackbar);

  setTimeout(() => {
    $snackbarContainer.removeChild($snackbar);
  }, 2000);
};

export { showSnackbar };
