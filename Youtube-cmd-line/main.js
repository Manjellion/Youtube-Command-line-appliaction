var hamburgerButton = document.querySelector('.hamburger_button');
var mobileNav = document.querySelector('.mobile');

function openMobiles() {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}














hamburgerButton.addEventListener('click', openMobiles);
mobileNav.addEventListener('click', closeMobile);