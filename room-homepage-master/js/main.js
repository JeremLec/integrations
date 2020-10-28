function toggleMenu(button){
  button.addEventListener('click', ()=>{
    let menu = document.querySelector('nav');
    menu.classList.toggle('close');
  });
}

let menuBtn = document.querySelector('.hamburger');
let menuBtnClose = document.querySelector('.nav-btn-close');
toggleMenu(menuBtn);
toggleMenu(menuBtnClose);

const images = ['../images/desktop-image-hero-1.jpg',
  '../images/desktop-image-hero-2.jpg',
  '../images/desktop-image-hero-3.jpg'];

let count = 0;
const btnPrev = document.querySelector('#slider-prev');
const btnNext = document.querySelector('#slider-next');
const slider = document.querySelector('header');

btnPrev.addEventListener('click', ()=>{
  if (count <= images.length -1 && count > 0){
    count -= 1;
    slider.style.backgroundImage = "url('"+images[count]+"')";
  } else if (count == 0){
    count = images.length - 1;
    slider.style.backgroundImage = "url('"+images[count]+"')";
  }
});
btnNext.addEventListener('click', ()=>{
  if (count < images.length - 1){
  count += 1;
  slider.style.backgroundImage = "url('"+images[count]+"')";
  } else if (count == images.length - 1) {
    count = 0;
    slider.style.backgroundImage = "url('"+images[count]+"')";
  }
});