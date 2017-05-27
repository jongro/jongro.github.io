
$(window).on('load', function () {
        $('body').on('dragstart', function (event) { event.preventDefault(); });
        $("#load").fadeToggle(0);
        $("#front").css({ visibility: 'visible' });
        $("#images").css({ visibility: 'visible' });
        $("#contact").css({ visibility: 'visible' });
        $("#buttonleft").css({ visibility: 'visible' });
        $("#buttonright").css({ visibility: 'visible' });
        setTimeout(function () {
            $('#imagescontainer').css({ visibility: 'visible' });
        }, 0);
});

//$(window).scroll(function () {
 //   $('#buttonleft').css('top', '-' + $(window).scrollTop() + 'px');
 //   $('#buttonright').css('top', '-' + $(window).scrollTop() + 'px');
//});

$(window).on('load', function () {

    try {
        document.createEvent('TouchEvent');
        alwShoNav = true;
    } catch (e) { }

    if (alwShoNav) {
        $("figcaption").css({ visibility: 'visible' });
        $("figcaption").css({ opacity: '1' });
    };

});

$(window).on('load resize', function () {
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': false,
        'resizeDuration': 400,
        'imageFadeDuration': 400,
        'fadeDuration': 800,
    });
});