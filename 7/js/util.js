const htmlBody = document.querySelector('body');

const isLengthFit = function (checkedLine, maxLength) {
  return checkedLine.length <= maxLength;
}

const getRandomNumber = function (min, max) {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));

  if (max < min) {
    let temp = max;
    max = min;
    min = temp;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
}

const randomNumbersList = function (quantity) {
  return new Array(quantity)
    .fill(null)
    .map((elem, idx) => idx + 1)
    .sort(() => Math.random() - 0.5);
}

const getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)]
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export {
  isLengthFit,
  getRandomNumber,
  randomNumbersList,
  getRandomElement,
  isEscEvent,
  htmlBody
};
