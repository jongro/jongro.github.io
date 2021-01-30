document.getElementById("year").innerHTML = new Date().getFullYear();

let grid = document.getElementById("grid")
let imgs = grid.getElementsByTagName("img");
let state = 0;

arrangeImages();
window.addEventListener('resize', arrangeImages);



function arrangeImages() {

    let viewportWidth = window.innerWidth;

    if (state == 2 && viewportWidth > 740 || state == 0 && viewportWidth > 740) {

        for (i = 0; i < imgs.length; i++) { 
    
            imgs[i].style.marginTop = String(Math.random() * 50) + "%"; 
            imgs[i].style.marginLeft = String((Math.random() -0.5) * 50) + "%";       
        }

        state = 1;
    
    } else if (state == 1 && viewportWidth <= 740 || state == 0 && viewportWidth <= 740) {
    
        for (i = 0; i < imgs.length; i++) { 
    
            imgs[i].style.marginTop = String(Math.random() * 10) + "%"; 
            imgs[i].style.marginLeft = String((Math.random() -0.5) * 10) + "%";       
        }

        state = 2;

    }

  }


