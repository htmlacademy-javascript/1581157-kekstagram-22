import {
  createPosts
} from './create-posts.js';

const picturesList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictures = createPosts();

const picturesListFragment = document.createDocumentFragment();

createPictures.forEach(({
  url,
  likes,
  comments,
}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(pictureElement);
});

picturesList.appendChild(picturesListFragment);
