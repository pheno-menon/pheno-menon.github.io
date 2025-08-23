const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        toggle.textContent = "🌙";
    } else {
        toggle.textContent = "🌞";
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const slides = document.querySelectorAll('.carousel-slides');
  const caption = document.getElementById('caption');
  let index = 0;
  const captions = [
    "Mountains of Sikkim",
    "Hoogly Boat Ride",
    "A Particularly Sad Looking Cat",
    "Duck Ducking About"
  ];

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    caption.textContent = captions[index];
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  let setAutoplay = setInterval(nextSlide, 4000);

  function resetAutoplay() {
    clearInterval(setAutoplay);
    setAutoplay = setInterval(nextSlide, 4000);
  }

  updateCarousel();
});