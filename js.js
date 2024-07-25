

text = document.getElementsByTagName("p")[0]

text.addEventListener("click", fadeout);

function fadeout() {
    text.style.transform = "scale(0)";
    text.style.opacity = "0";
    setTimeout(function(){document.title = '\u200B';}, 750);
    setTimeout(function(){document.title = '\u200C';}, 1750);
    setTimeout(function(){document.title = '\u200D';}, 2750);
    setTimeout(function(){document.title = '\u200E';}, 3750);
    setTimeout(function(){document.title = '\u2060';}, 4750);
    setTimeout(function(){document.title = '\u206D';}, 5750);
    setTimeout(function(){document.title = '\u206F';}, 6750);
    setTimeout(function(){document.title = '   ';}, 7750);
    setTimeout(function(){document.title = '|';}, 10750);




    //setTimeout(function(){document.open();}, 800);
}
