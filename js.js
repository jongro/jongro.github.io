

text = document.getElementsByTagName("p")[0]

text.addEventListener("click", fadeout);

function fadeout() {
    text.style.transform = "scale(0)";
    setTimeout(function(){;}, 0.3);
    setTimeout(function(){document.title = '\u00A0';}, 3000);
}
