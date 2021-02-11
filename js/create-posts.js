import {
  NAMES,
  MESSAGES,
  getRandomNumber,
  randomNumbersList,
  getRandomElement
} from './util.js';

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

export {
  createPosts
};
