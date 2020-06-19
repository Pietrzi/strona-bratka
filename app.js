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

const mobileMenu = document.querySelector('.mobile-nav-wrapper');
const mobileMenuNav = document.querySelector('.mobile-nav');

const closeMobileMenu = () => {
    mobileMenu.style.display = "none";
}

mobileMenuNav.addEventListener('click', closeMobileMenu);