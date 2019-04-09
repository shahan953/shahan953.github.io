$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 50) {
            $("#mainNav").removeClass("giver-top-nav");
        } else {
            $("#mainNav").addClass("giver-top-nav");
        }
    });
});


$(function () {
    $('.video-inner').css("height",($('.video-inner').width()*.56));
    $(window).resize(function () {
        $('.video-inner').css("height",($('.video-inner').width()*.56));
    });
});

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true 
  });
$(function () {
        $('.navbar-toggler').click(function () {
            $("#mainNav").addClass("giver-top-nav");
            if($('.navbar').height()>100 && $(window).scrollTop() < 50){
                setTimeout(() => {
                    $("#mainNav").removeClass("giver-top-nav");
                }, 250);
            }
        });
});
$(function () {
    $('.navbar-toggler').click(function () {
        
    });
});
