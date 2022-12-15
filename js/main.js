const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.onclick = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}