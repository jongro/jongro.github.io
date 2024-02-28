

text = document.getElementsByTagName("p")[0]

text.addEventListener("click", fadeout);

function fadeout() {
    text.style.transform = "scale(0)";
    text.style.opacity = "0";
    setTimeout(function(){document.title = '\u00A0';}, 750);
    setTimeout(function(){document.open();}, 800);
}
