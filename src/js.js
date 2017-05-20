$(window).on('load', function () {
    $("#load").fadeToggle(0);
});

$(window).on('load', function () {
    $("figure").css({ opacity: 1 });
});


$(window).on('load', function () {
    var k = 7;   
    var text = new Array(k);
    for (var i = 1; i <=k; i++)
        text[k-i] = '<figure id="figure0' + i + '"><img id="image0' + i + '" src="images/2017/0' + i + '.jpg" alt="" onload="$("#title0' + i + '").load("images/2017/0' + i + '.txt"); $("#figure0' + i + '").css({ display: "block" });" /><figcaption id="title0' + i + '"></figcaption></figure>'
    $('#images').html(text);
});    

//        <figure id="figure12">
//            <img id="image12" src="images/2017/12.jpg" alt="" onload="$('#title12').load('images/2017/12.txt'); $('#figure12').css({ display: 'block' });" />
//            <figcaption id="title12"></figcaption>
//        </figure>






//        <figure id="figure11">
//            <img id="image11" src="images/2017/11.jpg" alt="" onload="$('#title11').load('images/2017/11.txt'); $('#figure11').css({ display: 'block' });" />
//            <figcaption id="title11"></figcaption>
//        </figure>
//        <figure id="figure10">
//            <img id="image10" src="images/2017/10.jpg" alt="" onload="$('#title10').load('images/2017/10.txt'); $('#figure10').css({ display: 'block' });" />
//            <figcaption id="title10"></figcaption>
//        </figure>
//        <figure id="figure09">
//            <img id="image09" src="images/2017/09.jpg" alt="" onload="$('#title09').load('images/2017/09.txt'); $('#figure09').css({ display: 'block' });" />
//            <figcaption id="title09"></figcaption>
//        </figure>
//        <figure id="figure08">
//            <img id="image08" src="images/2017/08.jpg" alt="" onload="$('#title08').load('images/2017/08.txt'); $('#figure08').css({ display: 'block' });" />
//            <figcaption id="title08"></figcaption>
//        </figure>
//        <figure id="figure07">
//            <img id="image07" src="images/2017/07.jpg" alt="" onload="$('#title07').load('images/2017/07.txt'); $('#figure07').css({ display: 'block' });" />
//            <figcaption id="title07"></figcaption>
//        </figure>
//        <figure id="figure06">
//            <img id="image06" src="images/2017/06.jpg" alt="" onload="$('#title06').load('images/2017/06.txt'); $('#figure06').css({ display: 'block' });" />
//            <figcaption id="title06"></figcaption>
//        </figure>
//        <figure id="figure05">
//            <img id="image05" src="images/2017/05.jpg" alt="" onload="$('#title05').load('images/2017/05.txt'); $('#figure05').css({ display: 'block' });" />
//            <figcaption id="title05"></figcaption>
//        </figure>
//        <figure id="figure04">
//            <img id="image04" src="images/2017/04.jpg" alt="" onload="$('#title04').load('images/2017/04.txt'); $('#figure04').css({ display: 'block' });" />
//            <figcaption id="title04"></figcaption>
//        </figure>
//        <figure id="figure03">
//            <img id="image03" src="images/2017/03.jpg" alt="" onload="$('#title03').load('images/2017/03.txt'); $('#figure03').css({ display: 'block' });" />
//            <figcaption id="title03"></figcaption>
//        </figure>
//        <figure id="figure02">
//            <img id="image02" src="images/2017/02.jpg" alt="" onload="$('#title02').load('images/2017/02.txt'); $('#figure02').css({ display: 'block' });" />
//            <figcaption id="title02"></figcaption>
//        </figure>
//        <figure id="figure01">
//            <img id="image01" src="images/2017/01.jpg" alt="" onload="$('#title01').load('images/2017/01.txt'); $('#figure01').css({ display: 'block' });" />
//            <figcaption id="title01"></figcaption>
//        </figure>
