
        //Mobile Menu
    $('.menu-icon').click(function() {
        $("#nav").slideToggle('nav_acvite');
    });
    
    $('.menu-icon').click(function(e) {
        e.stopPropagation();
        $("#nav").toggleClass('nav_acvite');
        $("#nav").slideToggle('nav_acvite');
    });


    $('body').click(function(e) {
        if ($('#nav').hasClass('nav_acvite')) {
            $("#nav").toggleClass('nav_acvite')
        }
    });
        // slider-content1
    $('.content__slider ').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
                }
            }
            ]
    });

    


   