

$(document).ready(function () {
    $.get('images/2017/2017.txt', function (data) {
        var title = data.split("\n")[0].split("\t")[1];
        var title1 = data.split("\n")[1].split("\t")[1];
        var title2 = data.split("\n")[2].split("\t")[1];
        var title3 = data.split("\n")[3].split("\t")[1];
        $('#title').html(title);
        $('#title1').html(title1);
        $('#title2').html(title2);
        $('#title3').html(title3);
    });
});

$(document).ready(function () {
    $('#here').load('images/2017/01.txt');
});
