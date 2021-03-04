const imageUpload = document.querySelector('.img-upload');
const hashtagInput = imageUpload.querySelector('.text__hashtags');
const commentInput = imageUpload.querySelector('.text__description');

const compareStrings = function (index, array) {
  if (index > 0) {
    for (let i = 0; i < array.length; i++) {
      return array[i].toLowerCase() == array[index].toLowerCase();
    }
  }
}

hashtagInput.addEventListener('input', () => {
  const MIN_HASHTAG_LENGTH = 2;
  const MAX_HASHTAG_LENGTH = 20;
  const MAX_HASHTAGS_COUNT = 5;
  const inputPattern = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
  const hashtagsArray = hashtagInput.value.split(' ');

  for (let i = 0; i < hashtagsArray.length; i++) {
    const hashtagText = hashtagsArray[i];
    const isStringsMatch = compareStrings(i, hashtagsArray);
    const isLettersAndNumbers = inputPattern.test(hashtagText.slice(1));

    if (hashtagsArray.length > MAX_HASHTAGS_COUNT) {
      hashtagInput.setCustomValidity('Удалите ' + (hashtagsArray.length - MAX_HASHTAGS_COUNT) + ' хэштэга');
    } else if (hashtagsArray[i].length < MIN_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity('Не хватает ' + (MIN_HASHTAG_LENGTH - hashtagText.length) + ' символов или удалите пробел')
    } else if (hashtagText.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity('Удалите ' + (hashtagText.length - MAX_HASHTAG_LENGTH) + ' символов')
    } else if (!hashtagText.startsWith('#')) {
      hashtagInput.setCustomValidity('Хэштэг должен начинаться с символа #')
    } else if (isStringsMatch) {
      hashtagInput.setCustomValidity('Хэштэги не должны совпадать')
    } else if (!isLettersAndNumbers) {
      hashtagInput.setCustomValidity('Разрешены только буквы и цифры')
    } else {
      hashtagInput.setCustomValidity('');
    }

    hashtagInput.reportValidity();
  }
});

commentInput.addEventListener('input', (evt) => {
  evt.stopPropagation();

  const MAX_COMMENT_LENGTH = 140;
  const commentLength = commentInput.value.length;

  if (commentLength > MAX_COMMENT_LENGTH) {
    commentInput.setCustomValidity('Удалите ' + (commentLength - MAX_COMMENT_LENGTH) + ' символов');
  } else {
    commentInput.setCustomValidity('');
  }

  commentInput.reportValidity();
})
