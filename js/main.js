// Owl Carousel
$(document).ready(function(){
    $(".home-slides").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    }); 
});

// Smooth scrolling
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top -20
        }, 1550, "easeInOutExpo");
    });
});
