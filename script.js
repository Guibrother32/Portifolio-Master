$(window).scroll(() => {
    if ($(this).scrollTop() > 40) {
        $('#top-scroller').fadeIn();
    } else {
        $('#top-scroller').fadeOut();
    }
});

$('#top-scroller').click(() => {
    $('html, body').animate({ scrollTop: 0 }, 800);
});

$('#home__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show'); //remove the backdrop

    $('html, body').animate({ scrollTop: 0 }, 800);

});

$('#about__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var aboutEl = $('#about');
    var aboutElOffset = aboutEl.offset().top - 46; //46 -> navbar height


    $('html, body').animate({ scrollTop: aboutElOffset }, 800);
});


$('#projects__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var projectsOffset = $('#projects').offset().top - 46;
    $('html, body').animate({ scrollTop: projectsOffset }, 800);
});

$('#skills__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var skillsOffset = $('#skills').offset().top - 46;
    $('html, body').animate({ scrollTop: skillsOffset }, 800);
});

$(window).on('scroll', function (e) {
    var y_scroll_pos = window.pageYOffset;
    var isVisible = y_scroll_pos + 400 > $('#skills').offset().top; //backend card fadeIn
    var isVisible2 = y_scroll_pos + 100 > $('#skills').offset().top; //Front card fadeIn
    var isVisible3 = y_scroll_pos - 100 > $('#skills').offset().top; //extras card fadeIn

    var isMobile = $(window).width() < 600;

    if (isMobile && isVisible) {
        $('#backend').addClass('backend-animation u-visible');
    }
    if (isMobile && isVisible2) {
        $('#frontend').addClass('extras-animation u-visible');
    }
    if (isMobile && isVisible3) {
        $('#extras').addClass('backend-animation u-visible');
    }

    // var firstTime = isVisible;
    // var firstTime = isVisible;
    if (isVisible && !isMobile) {
        $('#backend').addClass('backend-animation u-visible');
        $('#frontend').addClass('frontend-animation u-visible');
        $('#extras').addClass('extras-animation u-visible');
        // firstTime = false;
    }
});

$('#history__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var contactOffset = $('#history').offset().top - 46;
    $('html, body').animate({ scrollTop: contactOffset }, 800);
});

$('#contact__navbar').click(() => {
    event.preventDefault();
    $('#navbarMenu').removeClass('show');

    var contactOffset = $('#contact').offset().top - 46;
    $('html, body').animate({ scrollTop: contactOffset }, 800);
});

// $('.card').click(() => {

//     var isMobile = $(window).width() < 600;

//     if (isMobile) {
//         if ($('.card-additional').hasClass('.card-click')) {
//             $('.card-additional').removeClass('.card-click');
//             $('.card-additional').addClass('.card-click-close');
//         } else {
//             $('.card-additional').removeClass('.card-click-close');
//             $('.card-additional').addClass('.card-click');
//         }

//     }
// });

$(".default-option").click(function () {
    $(this).parent().toggleClass("active");
    console.log('akosfdposfda00');
});
$(".main__background--animation").click(function () {
    $(".select-wrap").removeClass("active");
});

$(".select-ul li").click(function () {
    var currentEl = $(this).html();
    $("default-option li").html(currentEl);
    $(this).parents(".select-wrap").removeClass("active");
});


