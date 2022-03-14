import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryBox = document.querySelector("div.gallery");

for (const el of galleryItems) {


  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.alt = el.description;
  galleryBox.append(galleryLink);
  galleryLink.append(galleryImage);
};
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});