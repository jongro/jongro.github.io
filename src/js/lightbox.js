window.onload = function () {
	var lightbox = document.createElement("img");
	lightbox.id = "lightbox";
	document.body.appendChild(lightbox);

	var lightboxbackground = document.createElement("div");
	lightboxbackground.id = "lightboxbackground";
	document.body.appendChild(lightboxbackground);

	var prev = document.createElement("i");
	prev.id = "prev";
	prev.classList.add("material-icons");
	document.body.appendChild(prev);

	var next = document.createElement("i");
	next.id = "next";
	next.classList.add("material-icons");
	document.body.appendChild(next);
}

lightbox = function lightbox(image) {
	var image = image;
	var lightbox = document.getElementById("lightbox")
	var lightboxbackground = document.getElementById("lightboxbackground")
	var next = document.getElementById("next")
	var prev = document.getElementById("prev")

	lightbox.src = image.src;
	lightbox.style.visibility = "visible";
	lightbox.style.opacity = "1";
	lightboxbackground.style.visibility = "visible";
	lightboxbackground.style.opacity = "0.9";
	next.style.visibility = "visible";
	next.style.opacity = "1";
	prev.style.visibility = "visible";
	prev.style.opacity = "1";

	if (!image.parentNode.nextSibling.nextSibling) {
		next.style.display = "none";
	}
	if (image.parentNode.nextSibling.nextSibling) {
		next.style.display = "block";
	}
	if (!image.parentNode.previousSibling.previousSibling) {
		prev.style.display = "none";
	}
	if (image.parentNode.previousSibling.previousSibling) {
		prev.style.display = "block";
	}

	document.getElementById("lightboxbackground").onclick = function() {
		lightbox.style.visibility = "hidden";
		lightbox.style.opacity = "0";
		lightboxbackground.style.visibility = "hidden";
		lightboxbackground.style.opacity = "0";
		next.style.visibility = "hidden";
		next.style.opacity = "0";
		prev.style.visibility = "hidden";
		prev.style.opacity = "0";
	}

	document.getElementById("next").onclick = function() {
		image = image.parentNode.nextSibling.nextSibling.childNodes[[0]];
	
		lightbox.style.visibility = "hidden";
		lightbox.style.opacity = "0";
	
		if (!image.parentNode.nextSibling.nextSibling) {
			this.style.display = "none";
		}
		if (image.parentNode.previousSibling.previousSibling) {
			prev.style.display = "block";
		}
	
		setTimeout(function(){
			if (lightboxbackground.style.visibility === "visible") {
				lightbox.src = image.src;
				lightbox.style.visibility = "visible";
				lightbox.style.opacity = "1"
				}
			}, 400
		)
	}
	
	document.getElementById("prev").onclick = function() {
		image = image.parentNode.previousSibling.previousSibling.childNodes[[0]];
	
		lightbox.style.visibility = "hidden";
		lightbox.style.opacity = "0";
	
		if (!image.parentNode.previousSibling.previousSibling) {
			this.style.display = "none";
			}
		if (image.parentNode.nextSibling.nextSibling) {
			next.style.display = "block";
		}
	
		setTimeout(function(){
			if (lightboxbackground.style.visibility === "visible") {
				lightbox.src = image.src;
				lightbox.style.visibility = "visible";
				lightbox.style.opacity = "1"
				}
			}, 400
		)
	}


	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);

	var xDown = null;                                         
                                                 
	function getTouches(evt) {
	return evt.touches}                                                     

	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];                                      
		xDown = firstTouch.clientX;                                      
	};                                                

	function handleTouchMove(evt) {
		if ( ! xDown ) {
			return;
		}

		var xUp = evt.touches[0].clientX;                                    
		var xDiff = xDown - xUp;

		if ( xDiff > 0.05 && image.parentNode.nextSibling.nextSibling) {
			image = image.parentNode.nextSibling.nextSibling.childNodes[[0]];

			lightbox.style.visibility = "hidden";
			lightbox.style.opacity = "0";
		
			if (!image.parentNode.nextSibling.nextSibling) {
				next.style.display = "none";
			}
			if (image.parentNode.previousSibling.previousSibling) {
				prev.style.display = "block";
			}
		
			setTimeout(function(){
				if (lightboxbackground.style.visibility === "visible") {
					lightbox.src = image.src;
					lightbox.style.visibility = "visible";
					lightbox.style.opacity = "1"
					}
				}, 400
			)
		} else if (xDiff < -0.05 && image.parentNode.previousSibling.previousSibling) {
			image = image.parentNode.previousSibling.previousSibling.childNodes[[0]];
		
			lightbox.style.visibility = "hidden";
			lightbox.style.opacity = "0";
		
			if (!image.parentNode.previousSibling.previousSibling) {
				prev.style.display = "none";
				}
			if (image.parentNode.nextSibling.nextSibling) {
				next.style.display = "block";
			}
		
			setTimeout(function(){
				if (lightboxbackground.style.visibility === "visible") {
					lightbox.src = image.src;
					lightbox.style.visibility = "visible";
					lightbox.style.opacity = "1"
					}
				}, 400
			)
		} else {

		}                      

		/* reset values */
		xDown = null;
	};
}

document.getElementById("grid").addEventListener("click",function(img) {
	if(img.target && img.target.nodeName == "IMG") {
		lightbox(img.target)
	}
});




