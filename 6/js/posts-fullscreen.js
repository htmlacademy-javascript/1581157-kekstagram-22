import {
  postsList,
  postsArray
} from './posts.js';

import {
  isEscEvent
} from './util.js'

const bigPost = document.querySelector('.big-picture');
const postsElements = postsList.querySelectorAll('.picture');
const socialComments = bigPost.querySelectorAll('.social__comment');
const socialCommentCount = bigPost.querySelector('.social__comment-count');
const commentsLoader = bigPost.querySelector('.comments-loader');
const closeBigPostButton = bigPost.querySelector('.big-picture__cancel');

const createBigPost = function (element) {
  const {
    url,
    likes,
    description,
    comments,
  } = element;
  bigPost.querySelector('img').src = url;
  bigPost.querySelector('.likes-count').textContent = likes;
  bigPost.querySelector('.social__caption').textContent = description;
  bigPost.querySelector('.comments-count').textContent = comments.length;

  for (let i = 0; i < comments.length; i++) {
    const socialComment = socialComments[i];
    const {
      avatar,
      name,
      message,
    } = comments[i];

    socialComment.querySelector('.social__picture').src = avatar;
    socialComment.querySelector('.social__picture').alt = name;
    socialComment.querySelector('.social__text').textContent = message;
  }
};

const onEscDown = function (evt) {
  if (isEscEvent(evt)) {
    closeBigPost(evt);
  }
}

const closeBigPost = function (evt) {
  evt.preventDefault();
  bigPost.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  closeBigPostButton.removeEventListener('click', closeBigPost);
  document.removeEventListener('keydown', onEscDown);
}

const openBigPost = function () {
  for (let i = 0; i < postsElements.length; i++) {
    postsElements[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPost.classList.remove('hidden');
      socialCommentCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      closeBigPostButton.addEventListener('click', closeBigPost);
      document.addEventListener('keydown', onEscDown);
      createBigPost(postsArray[i]);
    });
  }
};

openBigPost();
