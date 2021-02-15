import {
  createPosts
} from './create-posts.js';

const postsList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const postsArray = createPosts(5);

const postsListFragment = document.createDocumentFragment();

postsArray.forEach(({
  url,
  likes,
  comments,
}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  postsListFragment.appendChild(pictureElement);
});

postsList.appendChild(postsListFragment);

export {
  postsArray,
  postsList
};
