document.getElementById("year").innerHTML = new Date().getFullYear();

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



