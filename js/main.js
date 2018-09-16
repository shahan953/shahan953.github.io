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
