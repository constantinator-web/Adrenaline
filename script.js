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
/*
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
    slide.addEventListener("click", clickHolder);
  }
  activeOrder = Math.floor(slides.length / 2);
  console.log(activeOrder);

  update();
}


function update() {
  const {width} = slider.getBoundingClientRect();
  const slideRect = slides[0].getBoundingClientRect();
  const a = width / 2;
  const delta = Math.PI / slides.length ;
  for (let i = 0; i < slides.length; i++) {
    const leftSlide = document.querySelector(
      `.price__slider-card[data-order="${activeOrder - i}"]`
      );

      console.log(leftSlide);
      if (leftSlide) {
          leftSlide.style.zIndex = slides.length - i; 
          leftSlide.style.left = `${
            width / 2 + a * Math.cos((Math.Pi * 3) / 2 - delta * i *2) 
        }px`;
      }

      const rightSlide = document.querySelector(
        `.price__slider-card[data-order="${activeOrder + i}"]`
        );
        if (rightSlide) {
          rightSlide.style.zIndex = slides.length - i; 
          rightSlide.style.left = `${
            width / 2 + a * Math.cos((Math.Pi * 3) / 2 + delta * i * 2)
          }px`;
        }
  }
}
function clickHolder() {
const order = parseInt(this.dataset.order, 10);
activeOrder = order;
update ();
};  */

const swiper = document.querySelector('.tracks__swiper');
if (swiper) {
  const trackSwitcherClosed = document.querySelector('.tracks__switcher-closed');
  const trackSwitcherOpened = document.querySelector('.tracks__switcher-opened');
  const paramsOpen = document.querySelectorAll('.tracks__item-param-open');
  const paramsClose = document.querySelectorAll('.tracks__item-param-close');
  const discriptonClose = document.querySelector('.tracks__discripton-map-close');
  const discriptonOpen = document.querySelector('.tracks__discripton-map-open');
  const controlNext = document.querySelector('.controlTracksNext');
  const controlPrev = document.querySelector('.controlTracksPrev');
  let SwitcheToClosed = function () {
    trackSwitcherClosed.classList.add('switcher-active');
    trackSwitcherOpened.classList.remove('switcher-active');
    for (let i = 0; i < paramsOpen.length; i++) {
      const param = paramsOpen[i];
      param.style.display = "none";
    }
    for (let i = 0; i < paramsClose.length; i++) {
      const param = paramsClose[i];
      param.style.display = "block";
    }
    discriptonClose.classList.add('discripton-map-active');
    discriptonOpen.classList.remove('discripton-map-active');
  }; 
  let SwitcheToOpened = function () {
    trackSwitcherClosed.classList.remove('switcher-active');
    trackSwitcherOpened.classList.add('switcher-active');
    for (let i = 0; i < paramsOpen.length; i++) {
      const param = paramsOpen[i];
      param.style.display = "block";
    }
    for (let i = 0; i < paramsClose.length; i++) {
      const param = paramsClose[i];
      param.style.display = "none";
    }
    discriptonClose.classList.remove('discripton-map-active');
    discriptonOpen.classList.add('discripton-map-active');  
  };
  trackSwitcherClosed.addEventListener('click', SwitcheToClosed); 
  trackSwitcherOpened.addEventListener('click', SwitcheToOpened);
  controlNext.addEventListener('click', SwitcheToOpened);
  controlNext.addEventListener('click', function (e) {
    controlNext.style.display = "none";
    controlPrev.style.display = "block"
  });
}
