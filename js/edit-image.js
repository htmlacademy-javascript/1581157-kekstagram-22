import {
  htmlBody,
  isEscEvent
} from './util.js'

import {
  noUiSlider
} from './../nouislider/nouislider.js'


const imageUpload = document.querySelector('.img-upload');
const uploadFile = imageUpload.querySelector('#upload-file');
const imageEditing = imageUpload.querySelector('.img-upload__overlay');
const uploadClose = imageUpload.querySelector('#upload-cancel');
const scaleControlSmaller = imageUpload.querySelector('.scale__control--smaller');
const scaleControlBigger = imageUpload.querySelector('.scale__control--bigger');
const scaleControl = imageUpload.querySelector('.scale__control--value');
const imgUploadPreview = imageUpload.querySelector('.img-upload__preview');
const imgUploadPreviewImage = imgUploadPreview.querySelector('img');
const effectsRadio = imageUpload.querySelectorAll('.effects__radio');
const effectLevelSlider = imageUpload.querySelector('.effect-level__slider');
const effectLevelValue = imageUpload.querySelector('.effect-level__value');

const onEscDown = function (evt) {
  if (isEscEvent(evt)) {
    closeimageEditing(evt);
  }
}

const effectsChange = function () {
  for (let i = 0; i < effectsRadio.length; i++) {
    effectsRadio[i].addEventListener('click', () => {
      if (imageUpload.querySelector('#effect-none').checked) {
        effectLevelSlider.style.display = 'none';
      } else {
        effectLevelSlider.style.display = 'block';
      }

      if (imageUpload.querySelector('#effect-chrome').checked) {
        imgUploadPreviewImage.classList.add('effects__preview--chrome');
        effectLevelSlider.noUiSlider.reset();

        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 0,
          step: 0.1,
        })

        effectLevelSlider.noUiSlider.on('update', () => {
          imgUploadPreviewImage.style.filter = 'grayscale(' + effectLevelValue.value + ')';
        });

      } else {
        imgUploadPreviewImage.classList.remove('effects__preview--chrome');
      }

      if (imageUpload.querySelector('#effect-sepia').checked) {
        imgUploadPreviewImage.classList.add('effects__preview--sepia');
        effectLevelSlider.noUiSlider.reset();

        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 0,
          step: 0.1,
        })

        effectLevelSlider.noUiSlider.on('update', () => {
          imgUploadPreviewImage.style.filter = 'sepia(' + effectLevelValue.value + ')';
        });

      } else {
        imgUploadPreviewImage.classList.remove('effects__preview--sepia');
      }

      if (imageUpload.querySelector('#effect-marvin').checked) {
        imgUploadPreviewImage.classList.add('effects__preview--marvin');
        effectLevelSlider.noUiSlider.reset();

        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          start: 0,
          step: 1,
        });

        effectLevelSlider.noUiSlider.on('update', () => {
          imgUploadPreviewImage.style.filter = 'invert(' + effectLevelValue.value + '%)';
        });

      } else {
        imgUploadPreviewImage.classList.remove('effects__preview--marvin');
      }

      if (imageUpload.querySelector('#effect-phobos').checked) {
        imgUploadPreviewImage.classList.add('effects__preview--phobos');
        effectLevelSlider.noUiSlider.reset();

        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          start: 0,
          step: 0.1,
        });

        effectLevelSlider.noUiSlider.on('update', () => {
          imgUploadPreviewImage.style.filter = 'blur(' + effectLevelValue.value + 'px)';
        });

      } else {
        imgUploadPreviewImage.classList.remove('effects__preview--phobos');
      }

      if (imageUpload.querySelector('#effect-heat').checked) {
        imgUploadPreviewImage.classList.add('effects__preview--heat');
        effectLevelSlider.noUiSlider.reset();

        effectLevelSlider.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          start: 0,
          step: 0.1,
        });

        effectLevelSlider.noUiSlider.on('update', () => {
          imgUploadPreviewImage.style.filter = 'brightness(' + effectLevelValue.value + ')';
        });

      } else {
        imgUploadPreviewImage.classList.remove('effects__preview--heat');
      }
    })
  }
};

uploadFile.addEventListener('change', () => {
  imageEditing.classList.remove('hidden');
  htmlBody.classList.add('modal-open');
  uploadClose.addEventListener('click', closeimageEditing);
  document.addEventListener('keydown', onEscDown);
  effectSlider();
  effectsChange();
})

const closeimageEditing = function (evt) {
  evt.preventDefault();
  imageEditing.classList.add('hidden');
  htmlBody.classList.remove('modal-open');
  uploadClose.removeEventListener('click', closeimageEditing);
  document.removeEventListener('keydown', onEscDown);
  uploadFile.value = '';
}

const addTransformScale = function (element) {
  const transofrmScaleValue = scaleControl.value / 100;
  element.style.transform = 'scale(' + transofrmScaleValue + ')';
}

scaleControlSmaller.addEventListener('click', (evt) => {
  evt.preventDefault();
  const scaleControlCurrentValue = Number(scaleControl.value.slice(0, -1));

  if (scaleControlCurrentValue > 25) {
    scaleControl.value = scaleControlCurrentValue - 25;
    addTransformScale(imgUploadPreviewImage);
    scaleControl.value += '%';
  }
})

scaleControlBigger.addEventListener('click', (evt) => {
  evt.preventDefault();
  const scaleControlCurrentValue = Number(scaleControl.value.slice(0, -1));

  if (scaleControlCurrentValue < 100) {
    scaleControl.value = scaleControlCurrentValue + 25;
    addTransformScale(imgUploadPreviewImage);
    scaleControl.value += '%';
  }
})

const effectSlider = function () {
  noUiSlider.create(effectLevelSlider, {
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  });

  effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
    effectLevelValue.value = unencoded[handle];
  });
}
