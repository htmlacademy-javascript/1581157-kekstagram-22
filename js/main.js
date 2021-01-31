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

const isLengthFit = function (checkedLine, maxLength) {
  return checkedLine.length <= maxLength;
}

getRandomNumber(24, 46);
isLengthFit(232, 4);
