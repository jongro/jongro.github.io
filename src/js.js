$(window).on('load', function () {
    $("#load").fadeToggle(0);
});

$(window).on('load', function () {
    $("figure").fadeToggle(0);
});

//$(document).ready(function () {
//    $.get('images/2017/2017.txt', function (data) {
//        var title1 = data.split("\n")[1].split("\t")[1];
//        var title2 = data.split("\n")[2].split("\t")[1];
//        var title3 = data.split("\n")[3].split("\t")[1];
//        $('#title1').html(title1);
//        $('#title2').html(title2);
//        $('#title3').html(title3);
//    });
//});

$(document).ready(function () {
    $('#titlex1').load('images/2017/01.txt');
    $('#titlex2').load('images/2017/02.txt');
    $('#titlex3').load('images/2017/03.txt');
});
