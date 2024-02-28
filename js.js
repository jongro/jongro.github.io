

text = document.getElementsByTagName("p")[0]

text.addEventListener("click", fadeout);

function fadeout() {
    text.style.transform = "scale(0)"
    setTimeout(function(){text.style.opacity = "0";}, 0.3);

    document.title = '\u00A0';
}
