
$(window).on('load', function () {
    $('body').on('dragstart', function (event) { event.preventDefault(); });
    $("#load").fadeToggle(0);
    $("#front").css({ visibility: 'visible' });
    $("#images").css({ visibility: 'visible' });
    $("#buttonleft").css({ visibility: 'visible' });
    $("#buttonright").css({ visibility: 'visible' });
    setTimeout(function () {
        $('#imagescontainer').css({ visibility: 'visible' });
    }, 0);
});

$(window).on('load resize', function () {
    if ($(window).width() < 960) {                 // an Breite von body anpassen
        $("#buttonright").css({ left: '905px' });
    } else {
        $("#buttonright").css({ left: 'auto' });
    }
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