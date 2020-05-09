


function createCircle(click, x = 0, y = 0, release = undefined) {
    var circle = document.createElement("span")
    circle.id = "circle"
    
    if (click || undefined) {
        var x = click.clientX
        var y = click.clientY
    }

    circle.style.left = x + "px"
    circle.style.top = y + "px"


    document.getElementById("canvas").appendChild(circle)

    setTimeout(function(){
        circle.style.width = "10vw"
        circle.style.height = "10vw"
        circle.style.left = "calc(" + x + "px - 4vw)"
        circle.style.top = "calc(" + y + "px - 4vw)"
        circle.style.opacity = 0.6;
        }, 1
    )

   if (release === undefined) {
    addEventListener("mouseup", function() {

            circle.style.width = "20vw"
            circle.style.height = "20vw"
            circle.style.left = "calc(" + x + "px - 10vw)"
            circle.style.top = "calc(" + y + "px - 10vw)"
            circle.style.opacity = 0;

        setTimeout(function(){
            circle.style.display = "none"
            }, 3100
        )
    })
} else {
    setTimeout(function(){
            circle.style.width = "20vw"
            circle.style.height = "20vw"
            circle.style.left = "calc(" + x + "px - 10vw)"
            circle.style.top = "calc(" + y + "px - 10vw)"
            circle.style.opacity = 0;


             setTimeout(function(){
            circle.style.display = "none"
            }, 3100
             )

    }, release);

}
    
    
} 



canvas.addEventListener("mousedown", createCircle)
