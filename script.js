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
  const toggle = document.getElementById('autoplay-toggle');
  let index = 0;
  let autoplay = null;
  toggle.checked = true;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
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

  function startAutoplay() {
    stopAutoplay();
    autoplay = setInterval(nextSlide, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoplay);
    autoplay = null;
  }

  function resetAutoplay() {
    if (toggle.checked) {
      stopAutoplay();
      startAutoplay();
    }
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
  });

  updateCarousel();

  if (toggle.checked) {
    startAutoplay();
  }
});