const open_menu = document.querySelector('.fa-bars')
const close_menu = document.querySelector('.fa-square-xmark');
const nav_active = document.querySelectorAll('.navbar');

open_menu.addEventListener('click', () => {
    nav_active.forEach((elem) => elem.classList.add('active') )
})

close_menu.addEventListener('click', () => {
    nav_active.forEach(elem => elem.classList.remove('active'))
})