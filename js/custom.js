$(function () {
    "use strict";

    //main-nav fixed
    var $navOffset = $('#main-nav').offset().top;
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();
        if ($scrolling > $navOffset) {
            $('#main-nav').addClass('navFixed');
        } else {
            $('#main-nav').removeClass('navFixed');
        }
    });
    
    //scroll to top button
    $('.top-to').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling > 300) {
            $('.top-to').fadeIn();
        } else {
            $('.top-to').fadeOut();
        }
    });

    // banner-slide  
    $('.banner-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left leftbtn"></>',
        nextArrow: '<i class="fa fa-chevron-right rightbtn"></>',
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    //counter part
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // client-slide  
    $('.client-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa-long-arrow-left leftbtn"></>',
        nextArrow: '<i class="fa fa-long-arrow-right rightbtn"></>',
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

});