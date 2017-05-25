$(window).on("load", function () {
    var $window = $(window),
    buttonright = $('#buttonright');
    buttonleft = $('#buttonleft');
    content = $('#imagescontainer');
    //navcontrols = $('.nav-controls');
    var containerelmt = $('#images')[0];
    var contentelmt = $('#imagescontainer')[0];
    var content1elmt = $('#imagescontainer figure')[0];
    var fadetime = 600;
    var scrollTimer;
    var $document = $(document);
    var scrollOffset = 20;


    //hide scrollbar------------------------------------------------------------
    $document.ready(function () {
        containerelmt.style.height = content1elmt.offsetHeight + 5 + "px";
    });

    $document.ready(function () {
        contentelmt.style.bottom = contentelmt.clientHeight - contentelmt.offsetHeight - 5 + "px";
    });


    //hover controls-----------------------------------------------------------
    //navcontrols.css({
    //		opacity: 0
    //});

    //navcontrols.ready(function () {
    //content.mouseenter(
    //    function() {navcontrols.stop(true).animate({opacity: 1}, fadetime); },
    //);
    //content.mouseleave(
    //    function() {navcontrols.stop(true).animate({opacity: 0}, fadetime); },
    //);

    //navcontrols.mouseenter(
    //    function() {navcontrols.stop(true).animate({opacity: 1}, fadetime); },
    //);
    //});


    //hide buttons at end-----------------------------------------------------
    buttonright.css({
        opacity: 0
    });

    content.ready(function () {
        if ((content.scrollLeft() + content.width()) + 5 >= (contentelmt.scrollWidth)) {
            buttonright.stop(true).animate({
                opacity: 0
            }, fadetime / 3);
        } else {
            buttonright.animate({
                opacity: 1
            }, fadetime);
        }
    });

    content.on('scroll', function () {
        if ((content.scrollLeft() + content.width()) + 5 >= (contentelmt.scrollWidth)) {
            buttonright.stop(true).animate({
                opacity: 0
            }, fadetime / 3);
        } else {
            buttonright.animate({
                opacity: 1
            }, fadetime);
        }
    });


    buttonleft.css({
        opacity: 0
    });

    content.ready(function () {
        if ((content.scrollLeft()) !== 0) {
            buttonleft.animate({
                opacity: 1
            }, fadetime);
        } else {
            buttonleft.stop(true).animate({
                opacity: 0
            }, fadetime / 3);
        }
    });

    content.on('scroll', function () {
        if ((content.scrollLeft()) !== 0) {
            buttonleft.animate({
                opacity: 1
            }, fadetime);
        } else {
            buttonleft.stop(true).animate({
                opacity: 0
            }, fadetime / 3);
        }
    });


    //scroll function----------------------------------------------------------

    function scrollContent(scrollDir) {
        var scrollArgs = {
            scrollLeft: (content.scrollLeft() + (scrollOffset * scrollDir))
        };
        content.animate(scrollArgs, 50);
    };

    function scrollLeft() {
        scrollContent(-1);
    };

    function scrollRight() {
        scrollContent(1);
    };

    function scrollStop() {
        clearInterval(scrollTimer);
    };

    $("#buttonleft").on("mousedown", function () {
        scrollTimer = setInterval(scrollLeft, 60);
    }).on("mouseup mouseout", scrollStop);

    $("#buttonright").on("mousedown", function () {
        scrollTimer = setInterval(scrollRight, 60);
    }).on("mouseup mouseout", scrollStop);
});

