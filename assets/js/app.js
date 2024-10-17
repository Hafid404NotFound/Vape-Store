$(window).on("load", function () {
    AOS.init({
        once: true,
    });
});

$(function () {
    if ($(window).scrollTop() < 1) {
        $(".navbar").removeClass("active")
    } else {
        $(".navbar").addClass("active")
    }

    $(window).on("scroll", function () {
        if ($(window).scrollTop() < 1) {
            $(".navbar").removeClass("active")
        } else {
            $(".navbar").addClass("active")
        }
    })

    $("body").on("click", ".navbar-toggle, .navbar-menu, .navbar-close", () => {
        if ($(".navbar-toggle").hasClass("active")) {
            $(".navbar-toggle").removeClass("active")
            $(".navbar-menu").removeClass("active")
            $(".navbar-close").remov
            eClass("active")
        } else {
            $(".navbar-toggle").addClass("active")
            $(".navbar-menu").addClass("active")
            $(".navbar-close").addClass("active")
        }
    })
})

$(function () {
    $('.owl-carousel-slide-hero').owlCarousel ({
        center:true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 8000,
        loop: true,
        dots: true,
        nav: true,
        navText: [ "<i class='ri-arrow-left-s-line prev'></i>",
                    "<i class='ri-arrow-right-s-line next'></i>"
                ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })    
});

$(function () {
    $('.owl-carousel-kategori').owlCarousel ({
        center:false,
        margin: 10,
        autoplay: false,
        loop: false,
        dots: false,
        nav: true,
        navText: [ "<i class='ri-arrow-left-s-line prev2'></i>",
                    "<i class='ri-arrow-right-s-line next2'></i>"
                ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })    
});

$(function () {
    $('.owl-carousel-produk-terkait').owlCarousel ({
        center:false,
        margin: 15,
        autoplay: false,
        loop: false,
        dots: false,
        nav: true,
        navText: [ "<i class='ri-arrow-left-s-line prev1'></i>",
                    "<i class='ri-arrow-right-s-line next1'></i>"
                ],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })    
});

$(document).ready(function(){
    $('button').click(function(e){
        var button_classes, value = +$('.counter').val();
        button_classes = $(e.currentTarget).prop('class');        
        if(button_classes.indexOf('up_count') !== -1){
            value = (value) + 1;            
        } else {
            value = (value) - 1;            
        }
        value = value < 0 ? 0 : value;
        $('.counter').val(value);
    });  
    $('.counter').click(function(){
        $(this).focus().select();
    });
});