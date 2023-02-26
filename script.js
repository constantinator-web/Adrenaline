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

