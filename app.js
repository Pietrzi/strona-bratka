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