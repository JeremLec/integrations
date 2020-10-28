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

/*
-------------------------------
ACTION : angle left clic event
-------------------------------
INIT : compteur = 0;
 
- Vérifie le compteur d'images
  - Si compteur < images.length alors :
    - images[compteur]
    - compteur += 1
  - Si compteur = 3 alors :
    - compteur -= 1
    - images[compteur]

 */

const btnPrev = document.querySelector('#slider-prev');
const btnNext = document.querySelector('#slider-next');

let count = 0;

btnPrev.addEventListener('click', ()=>{
  console.log('prev!!!!');
  if(count < images.length){
    console.log(images[count]);
    count += 1;
  } else {
    count = 0;
    console.log(images[count]);
  }
});

btnNext.addEventListener('click', ()=>{
  console.log('next!!!!!');
  if(count < images.length){
    console.log(images[count]);
    count -= 1;
  } else {
    count = 0;
    console.log(images[count]);
  }
})