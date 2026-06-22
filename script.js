// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close menu when a link is clicked
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
    });
  });
}

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
const dotsContainer = document.getElementById('sliderDots');
let current = 0;

if (dotsContainer && testimonials.length > 0) {
  testimonials.forEach((_, index) => {
    const btn = document.createElement('button');
    btn.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
    if (index === 0) btn.classList.add('active');
    btn.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(btn);
  });

  function showTestimonial(index) {
    testimonials[current].classList.remove('active');
    dotsContainer.children[current].classList.remove('active');
    current = index;
    testimonials[current].classList.add('active');
    dotsContainer.children[current].classList.add('active');
  }

  setInterval(() => {
    const next = (current + 1) % testimonials.length;
    showTestimonial(next);
  }, 6000);
}
