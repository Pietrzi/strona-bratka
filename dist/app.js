$(function() {
    const arrow = $(".backup-arrow");
    $(window).scroll(function() {    
        let scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            arrow.css("display", "block");
        } else {
            arrow.css("display", "none");
        }
    });
});



const menuButton = document.querySelector('.toggle-button');
const menuButtonContainer = document.querySelector('.mobile-button-container');
const mobileMenu = document.querySelector('.mobile-nav-wrapper');
const mobileMenuNav = document.querySelector('.mobile-nav');

const openMobileMenu = () => {
    mobileMenu.style.display = "flex";
    menuButton.style.backgroundColor = "#ffaa80";
    menuButtonContainer.style.backgroundColor = "#ffaa80";
}

const closeMobileMenu = () => {
    mobileMenu.style.display = "none";
    menuButton.style.backgroundColor = "white";
    menuButtonContainer.style.backgroundColor = "white";
}

mobileMenuNav.addEventListener('click', closeMobileMenu);
menuButton.addEventListener('click', openMobileMenu);