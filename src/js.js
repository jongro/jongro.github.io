$(window).on('load', function () {
    $("#load").fadeToggle(0);
});

$(window).on('load', function () {
    $("figure").css({ opacity: 1 });
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
    var k = 6;
    for (var i = 1; i <=k; i++)
        $('#titlex'+i).load('images/2017/0'+i+'.txt');
});

$(document).ready(function () {
    var k = 6;
    var text = new Array(k);
    for (var i = 1; i <=k; i++)
        text[i-1] = "<div>" + i + "</div>";
    $('#test').html(text); 
});
