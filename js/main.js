$(document).ready(function() {
    // $('.menu-icon').click(function() {
    //     $('.adaptive').slideToggle();
    //     if ($('.menu-icon').html() == '<img src="img/bars.svg" alt="">') {
    //         $(this).html('<i class="fas fa-times"></i>');
    //     } else {
    //         $(this).html('<img src="img/bars.svg" alt="">');
    //     }
    // });

    $('#upload-file__input_1').on('change', function(e) {
        $('.file__resume').html(e.target.files[0].name);
    });

    // $(function() {
    //     $('.header__nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
    // });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            375: {
                pagination: {
                    el: '.swiper-pag',
                },
                navigation: {
                    nextEl: '.slidenext',
                    prevEl: '.slideprev',
                },
            },
            1025: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
        },
    });
});