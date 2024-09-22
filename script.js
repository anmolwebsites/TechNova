let hideButton = document.querySelector('.fa-times');
let showButton = document.querySelector('.fa-bars');
let navLinks = document.querySelector('.navLinks')
function showMenu(){
navLinks.style.transform = 'translateX(0%)'
}
function closeMenu(){
navLinks.style.transform = 'translateX(100%)'
}