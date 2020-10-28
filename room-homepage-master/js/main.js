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
    console.log(images[count]);
    slider.style.backgroundImage = "url('"+images[count]+"')";
  } else if (count == 0){
    count = images.length - 1;
    slider.style.backgroundImage = "url('"+images[count]+"')";
    console.log(images[count]);
  }
});
btnNext.addEventListener('click', ()=>{
  if (count < images.length - 1){
  count += 1;
  console.log(images[count]);
  slider.style.backgroundImage = "url('"+images[count]+"')";
  } else if (count == images.length - 1) {
    count = 0;
    console.log(images[count]);
    slider.style.backgroundImage = "url('"+images[count]+"')";
  }
});



// btnPrev.addEventListener('click', ()=>{
//   console.log('prev!!!!');
//   if(count < images.length){
//     console.log(images[count]);
//     count += 1;
//   } else {
//     count = 0;
//     console.log(images[count]);
//   }
// });

// btnNext.addEventListener('click', ()=>{
//   console.log('next!!!!!');
//   if(count < images.length){
//     console.log(images[count]);
//     count -= 1;
//   } else {
//     count = 0;
//     console.log(images[count]);
//   }
// })