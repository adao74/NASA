/* Counter variable: which slide */
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  /* If slide (slideIndex) tries to go over the last slide (slides.length), it gets set back to the 1st slide (1) */
  /* If slide (slideIndex) tries to go under the first slide (1), it gets placed on the last slide (slides.length) */
  /* If needed, set slideIndex to the right number */
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  /* Set all slides and dots to not display / inactive */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  /* Set ONE slide and ONE dot to display / active*/
  /* What you render takes into account the face that arrays have indices that start at 0 (i.e subtract 1) */
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}