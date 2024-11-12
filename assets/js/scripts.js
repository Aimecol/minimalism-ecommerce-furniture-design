function scrollToCategories() {
  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

let currentReview = 0;
const reviews = document.querySelectorAll('.review');

function showNextReview() {
  reviews[currentReview].classList.remove('active');
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add('active');
}

setInterval(showNextReview, 5000);

// JavaScript for Carousel
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentIndex + direction);
}

// Optional: Auto-scroll slides every 5 seconds
setInterval(() => moveSlide(1), 5000);
