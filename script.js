"use strict"

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
};

const menuBtn = document.querySelector('.header-menu__btn');
if (menuBtn) {
  const modal = document.querySelector('.modal');
  const close = document.querySelector('.close');
  menuBtn.addEventListener("click", function (e) {
    modal.classList.toggle('open');
    document.body.classList.toggle("lock");
  });
  close.addEventListener("click", function (e){ 
    modal.classList.toggle('open');
    document.body.classList.toggle("lock");
  });
}

const sliderWraper = document.querySelector(".price__wraper");
const slider = document.querySelector(".price__slider");
const slides = document.querySelectorAll(".price__slider-card");
const control = document.querySelectorAll(".control");

console.log(sliderWraper);
console.log(slider);
console.log(slides);
console.log(control);

let activeOrder = 0;

init();
function init() {
  for (let i = 0; i < slides.length; ++i) {
    let slide = slides[i];
    slide.dataset.order = i;
  }
  activeOrder = Math.floor(slides.length / 2);

  update();
}

console.log(activeOrder);

function update() {
  const {width, height} = slider.getBoundingClientRect();
  for (let i = 0; i < slides.length; i++) {
    const leftSlide = document.querySelector(
      `.price__slider-card[data-order="${activeOrder - i}"]`
      );
      console.log(leftSlide);
      if (leftSlide) {
        leftSlide.style.left = `${width / 2}px`;
      }
  }
}