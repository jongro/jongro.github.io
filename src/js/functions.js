document.getElementById("year").innerHTML = new Date().getFullYear();




let imgs = document.getElementsByTagName("img");


for (i = 0; i < imgs.length; i++) { 

    imgs[i].style.marginTop = String(Math.random() * 10) + "vw"; 
    imgs[i].style.marginLeft = String((Math.random() -0.5) * 5) + "vw";       
}