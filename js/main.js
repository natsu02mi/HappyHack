$(function($){
    $('.firstview').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });


    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        $(".fadein").each(function () {
          var  targetElement = $(this).offset().top;
          if (scroll >  targetElement - windowHeight + 200) {
            $(this).css('opacity', '1');
            $(this).css('transform','translateY(0)');
          }
        });
    });

    $('.slider').slick({
        arrows: true,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '0%',
        slidesToShow: 4,
        responsive:[
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                },
            },
        ],
    });

});