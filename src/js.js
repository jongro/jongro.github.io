$(window).on('load', function () {
    $("#load").fadeToggle(0);
});

$(window).on('load', function () {
    $("figure").fadeToggle(0);
});



//$(document).ready(function () {
//    document.getElementById("img04").onerror = function() {myFunction()};
//    function myFunction() {
//        var x = document.getElementById('fig04');
//            x.style.display = 'block';
//    };
//});

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
    $('#titlex4').load('images/2017/04.txt');
    $('#titlex5').load('images/2017/05.txt');
    $('#titlex6').load('images/2017/06.txt');
    $('#titlex7').load('images/2017/07.txt');
    $('#titlex8').load('images/2017/08.txt');
    $('#titlex9').load('images/2017/09.txt');
    $('#titlex10').load('images/2017/10.txt');
    $('#titlex11').load('images/2017/11.txt');
    $('#titlex12').load('images/2017/12.txt');
});
