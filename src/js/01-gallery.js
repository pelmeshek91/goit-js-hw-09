import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import galleryItemsTmp from '../template/gallery-items.hbs';

const galleryList = document.querySelector('.gallery');
const markup = galleryItemsTmp(galleryItems);

galleryList.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery .gallery__link', {
  captionDelay: 250,
  captionsData: 'alt',
});
