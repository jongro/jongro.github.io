window.onload = function () {
	document.getElementById("year").innerHTML = new Date().getFullYear();
}

new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
} );

function toggle() {
	document.getElementById("button-menu").classList.toggle("is-active");
	var nav = document.querySelector("nav ul");
	if (nav.style.visibility === "visible") {
		nav.style.visibility = "hidden";
		nav.style.opacity = "0"
		nav.style.transition = "opacity 0 ease"
	} else {
		nav.style.visibility = "visible";
		nav.style.opacity = "0.95"
		nav.style.transition = "opacity 0.5s ease"

	}
}



