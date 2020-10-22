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