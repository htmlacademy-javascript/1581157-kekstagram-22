import {
  showAlertPopup
} from './util.js'

const htmlMain = document.querySelector('main');

const getData = function (onSuccess) {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((comments) => {
      onSuccess(comments);
    })
    .catch((error) => {
      showAlertPopup(error);
    });
}

const showSuccessPopup = function () {
  const successPopupTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successPopupFragment = document.createDocumentFragment();
  const successPopup = successPopupTemplate.cloneNode(true);
  const successButton = successPopup.querySelector('.success__button');
  successPopup.style.zIndex = 100;

  successButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    successPopup.remove();
  })

  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains != 'success') {
      successPopup.remove();
    }
  })

  successPopupFragment.appendChild(successPopup);
  htmlMain.appendChild(successPopupFragment);
}

const showErrorPopup = function () {
  const errorPopupTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorPopupFragment = document.createDocumentFragment();
  const errorPopup = errorPopupTemplate.cloneNode(true);
  const errorButton = errorPopup.querySelector('.error__button');
  errorPopup.style.zIndex = 100;

  errorButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    errorPopup.remove();
  })

  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains != 'error') {
      errorPopup.remove();
    }
  })

  errorPopupFragment.appendChild(errorPopup);
  htmlMain.appendChild(errorPopupFragment);
}

const sendData = function (onSuccess, onFail, body) {
  fetch(
    'https://22.javascript.pages.academy/kekstagram', {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else {
      onFail();
    }
  }).catch(() => onFail())
}

export {
  showSuccessPopup,
  showErrorPopup,
  getData,
  sendData
}
