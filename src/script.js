
$(window).on('load', function () {
    $("#load").fadeToggle(0);
});

$(window).on('load', function () {
    $("figure").css({ visibility: 'visible' });
});

$(window).on('load resize', function () {
    lightbox.option({
        'showImageNumberLabel': false,
        'resizeDuration': 400,
        'imageFadeDuration': 400,
        'fadeDuration': 800,
    });
});


