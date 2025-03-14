"use strict";

/* const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}; */

/* const addEventOnElem = (elem, type, callback) => {
  if (NodeList.prototype.isPrototypeOf(elem)) {
    elem.forEach((el) => el.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
}; */

/* const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar); */

// Selección de elementos del DOM
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

// Función para alternar la barra de navegación
const toggleNavbar = () => {
  navbar.classList.toggle("active");
};

// Función para cerrar la barra de navegación
const closeNavbar = () => {
  navbar.classList.remove("active");
};

// Función para agregar eventos a uno o varios elementos
const addEventOnElem = (elem, type, callback) => {
  if (
    NodeList.prototype.isPrototypeOf(elem) ||
    HTMLCollection.prototype.isPrototypeOf(elem)
  ) {
    elem.forEach((el) => el.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
};

// Agregar eventos a los togglers y enlaces de navegación
addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navLinks, "click", closeNavbar);

/* const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}); */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

if (header && backTopBtn) {
  // Verifica si los elementos existen
  let lastScrollY = 0; // Almacena la última posición del scroll

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY >= 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
    lastScrollY = currentScrollY;
  };

  // Utiliza requestAnimationFrame para mejorar el rendimiento
  const optimizedScroll = () => {
    if (lastScrollY !== window.scrollY) {
      window.requestAnimationFrame(handleScroll);
    }
  };

  window.addEventListener("scroll", optimizedScroll);
}
