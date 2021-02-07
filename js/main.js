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

const randomNumbersList = function (quantity) {
  const array = new Array(quantity).fill(null);

  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

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

const getRandomElement = function (array) {
  return array[getRandomNumber(0, array.length - 1)]
}

const setIdValues = function (array, valuesList) {

  for (let i = 0; i < array.length; i++) {
    const element = valuesList[i];
    array[i].id = element;
    array[i].comments.id = element;
    array[i].url = 'photos/' + element + '.jpg';
  }

  return array;
}

const createPhotosDescriptions = function () {

  return {
    description: 'Это меня в автозак пакуют. Сейчас я дома уже',
    likes: getRandomNumber(15, 200),
    comments: {
      avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
      message: getRandomElement(MESSAGES),
      name: getRandomElement(NAMES),
    },
  }
};

const createPosts = function (linesQuantity) {
  const numbersList = randomNumbersList(linesQuantity);
  const photosDescription = new Array(linesQuantity).fill(null).map(() => createPhotosDescriptions());
  setIdValues(photosDescription, numbersList);
  return photosDescription
}

createPosts(25);
isLengthFit(232, 4);
