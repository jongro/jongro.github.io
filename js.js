

text = document.getElementsByTagName("p")[0]

text.addEventListener("click", fadeout);

function fadeout() {
    text.style.transform = "scale(0)";
    text.style.opacity = "0";
    setTimeout(function(){document.title = '\034F';}, 750);
    setTimeout(function(){document.open();}, 800);
}
