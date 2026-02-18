document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     NAVBAR TOGGLE + STICKY HEADER
  =============================== */

  const toggleButton = document.querySelector(".toggle-button");
  const navLinks = document.querySelector(".nav-links");
  const header = document.querySelector("header");

  toggleButton?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });


  /* ===============================
     SMOOTH SCROLL
  =============================== */

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });

      navLinks.classList.remove("active");
    });
  });


 /* ===============================
   ABOUT CAROUSEL + AUTO SLIDESHOW
=============================== */

const carouselTrack = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");

let slideIndex = 0;
let autoSlide;

// Move carousel
function updateCarousel() {
  if (!carouselTrack || slides.length === 0) return;
  carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Next slide
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateCarousel();
}

// Previous slide
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Button controls
nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);

// AUTO SLIDESHOW (every 3 seconds)
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Start autoplay
startAutoSlide();

// Pause when mouse is over carousel
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer?.addEventListener("mouseenter", stopAutoSlide);
carouselContainer?.addEventListener("mouseleave", startAutoSlide);

  /* ===============================
     GALLERY FILTER
  =============================== */

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-grid .gallery-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        item.style.display =
          filter === "all" || item.dataset.category === filter
            ? "block"
            : "none";
      });
    });
  });


  /* ===============================
     LIGHTBOX
  =============================== */

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const prev = document.querySelector(".lightbox-nav .prev");
  const next = document.querySelector(".lightbox-nav .next");

  let currentIndex = 0;
  const items = Array.from(galleryItems);

  function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = items[index].querySelector("img").src;
    lightbox.style.display = "flex";
  }

  items.forEach((item, i) => {
    item.addEventListener("click", () => openLightbox(i));
  });

  closeBtn?.addEventListener("click", () => lightbox.style.display = "none");

  prev?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    lightboxImg.src = items[currentIndex].querySelector("img").src;
  });

  next?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    lightboxImg.src = items[currentIndex].querySelector("img").src;
  });

  lightbox?.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });


  /* ===============================
     CONTACT FORM (FAKE DEMO)
  =============================== */

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form?.addEventListener("submit", e => {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#007bff";

    setTimeout(() => {
      status.textContent = "Message sent!";
      status.style.color = "green";
      form.reset();
    }, 1000);
  });


  /* ===============================
     HERO TYPING TEXT
  =============================== */

  const messages = [
    "We build websites.",
    "We create software.",
    "We solve IT problems.",
    "We design modern solutions.",
    "We support your business."
  ];

  const textElement = document.getElementById("dynamic-text");

  let current = 0;

  function type(message, i = 0) {
    if (!textElement) return;

    if (i < message.length) {
      textElement.textContent = message.slice(0, i + 1);
      setTimeout(() => type(message, i + 1), 80);
    } else {
      setTimeout(() => erase(message), 1500);
    }
  }

  function erase(message, i = message.length) {
    if (i > 0) {
      textElement.textContent = message.slice(0, i - 1);
      setTimeout(() => erase(message, i - 1), 40);
    } else {
      current = (current + 1) % messages.length;
      type(messages[current]);
    }
  }

  type(messages[current]);


  /* ===============================
     SCROLL REVEAL
  =============================== */

  function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();


  /* ===============================
     SCROLL TO TOP ARROW
  =============================== */

  const arrow = document.getElementById("scrollArrow");

  window.addEventListener("scroll", () => {
    arrow?.classList.toggle("show", window.scrollY > 300);
  });

  arrow?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");

dropdownLink.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdown.classList.toggle("active");
  }
});
document.addEventListener("DOMContentLoaded", function () {

  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function (e) {

      // Only activate on mobile
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }

    });
  }

});

