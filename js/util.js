const NAMES = [
  'Иполит',
  'Гаврила',
  'Гурген',
  'Инокентий',
  'Аркадий',
  'Валентин',
  'Ашот',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]

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

export {
  NAMES,
  MESSAGES,
  isLengthFit,
  getRandomNumber,
  randomNumbersList,
  getRandomElement
};
