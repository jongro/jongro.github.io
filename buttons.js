

/*MENU*/

/*play*/

var play = document.getElementById("play")
var pause = document.getElementById("pause")

var allLoops = document.getElementById("loops").getElementsByTagName("li")

function pauseAllFunction() {
    play.style.display = "block"
    pause.style.display = "none"
    for (i = 0; i < allLoops.length; i++) {
        pauseLoopFunction(allLoops[i].id);
      } 
}

function playAllFunction() {
    pause.style.display = "block"
    play.style.display = "none"
    for (i = 0; i < allLoops.length; i++) {
        playLoopFunction(allLoops[i].id);
      } 
}

play.addEventListener("click", playAllFunction)
pause.addEventListener("click", pauseAllFunction)


/*loop*/

var startRecordLoop = document.getElementById("startRecordLoop")
var stopRecordLoop = document.getElementById("stopRecordLoop")
var loopID = 0
var startTime

function startRecordLoopFunction() {
    startTime = new Date()
    startRecordLoop.style.display = "none";
    stopRecordLoop.style.display = "inline";

    /*add loop to canvas' upper left corner*/

    loopID = loopID + 1;

    var li = document.createElement("li");
    li.id = "l" + loopID;
    document.getElementById("loops").getElementsByTagName("UL")[0].appendChild(li);

    var span = document.createElement("span");
    if (loopID > 9) span.style.marginLeft = "1.59vw"
    li.appendChild(span)
    span.innerHTML = "L" + loopID

    var imgPause = document.createElement("img");
    imgPause.classList.add("pauseLoop")
    imgPause.setAttribute("src", "icons/pause_circle_filled-24px.svg")
    imgPause.setAttribute("alt", "pause")
    imgPause.setAttribute("onclick", "pauseLoopFunction('" + li.id + "')")
    li.appendChild(imgPause)

    var imgPlay = document.createElement("img");
    imgPlay.classList.add("playLoop")
    imgPlay.setAttribute("src", "icons/play_circle_filled-24px.svg")
    imgPlay.setAttribute("alt", "play")
    imgPlay.setAttribute("onclick", "playLoopFunction('" + li.id + "')")
    imgPlay.style.display = "none"
    li.appendChild(imgPlay)
    
    var imgClose = document.createElement("img");
    imgClose.classList.add("closeLoop")
    imgClose.setAttribute("src", "icons/cancel-24px.svg")
    imgClose.setAttribute("alt", "close")
    imgClose.setAttribute("onclick", "closeLoopFunction('" + li.id + "')")
    li.appendChild(imgClose)


	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    li.appendChild(svg);
    
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "calc(50% - 0.25vw)");
    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    svg.appendChild(circle);
}

function stopRecordLoopFunction() {
    var endTime = new Date()
    var duration = (endTime - startTime) / 1000
    stopRecordLoop.style.display = "none";
    startRecordLoop.style.display = "inline";
    var elementId = String("l" + loopID)
    var timerAnimation = document.getElementById(elementId).getElementsByTagName("svg")[0].getElementsByTagName("circle")[0]
    timerAnimation.style = "stroke-width: 0.25vw"
    timerAnimation.style.animation = "countdown " + duration + "s linear infinite forwards";
}

startRecordLoop.addEventListener("click", startRecordLoopFunction)
stopRecordLoop.addEventListener("click", stopRecordLoopFunction)


/*random*/

var startRandomMusic = document.getElementById("startRandomMusic")
var stopRandomMusic = document.getElementById("stopRandomMusic")

    function startRandomMusicFunction() {

        startRandomMusic.style.display = "none";
        stopRandomMusic.style.display = "inline";
        
        function playRandomMusic() {
        randomMusic = setInterval(function() {
            var toneLenght = String(Math.floor(Math.random() * 14 + 2)) + "n"
            var tone = (Math.floor(Math.random() * tones.length))
            synth.triggerAttack(tones[tone], toneLenght)

            var y = (((tone + (Math.random() / 2)) - tones.length) * -1) / 15 * (canvas.clientHeight + 8)
            var x = Math.random() * (canvas.clientWidth + 8)
            var release = Math.floor(Math.random() * 200 + 200)
            createCircle(undefined, x, y, release)
            setTimeout(function() {
                synth.triggerRelease()
            }, release);
        }, Math.floor(Math.random() * 200 + 400));
    }

      randomMusicChange = setInterval(function() {
        playRandomMusic();
        setTimeout(function() {
            clearInterval(randomMusic)
        }, 499);
      }, 500);

}

function stopRandomMusicFunction() {
    startRandomMusic.style.display = "inline";
    stopRandomMusic.style.display = "none";

    clearInterval(randomMusic);
    clearInterval(randomMusicChange);
}

startRandomMusic.addEventListener("click", startRandomMusicFunction)
stopRandomMusic.addEventListener("click", stopRandomMusicFunction)



/*record*/

var startRecordAll = document.getElementById("startRecordAll")
var stopRecordAll = document.getElementById("stopRecordAll")

function startRecordAllFunction() {
    startRecordAll.style.display = "none";
    stopRecordAll.style.display = "inline";
}

function stopRecordAllFunction() {
    startRecordAll.style.display = "inline";
    stopRecordAll.style.display = "none";

    var overlayRecord = document.getElementById("overlayRecord")
    overlayRecord.style.display = "block"

    var downloadRecord = document.getElementById("downloadRecord")
    downloadRecord.style.display = "block"

}

startRecordAll.addEventListener("click", startRecordAllFunction)
stopRecordAll.addEventListener("click", stopRecordAllFunction)


/*LOOPER*/

function pauseLoopFunction(elementId) {

    var element = document.getElementById(elementId).getElementsByClassName("pauseLoop")[0]
    element.parentNode.getElementsByTagName("svg")[0].getElementsByTagName("circle")[0].style.webkitAnimationPlayState = "paused"
    


    element.style.display = "none";
    element.parentNode.getElementsByClassName("playLoop")[0].style.display = "block"
}

function playLoopFunction(elementId) {

    var element = document.getElementById(elementId).getElementsByClassName("playLoop")[0]
    element.parentNode.getElementsByTagName("svg")[0].getElementsByTagName("circle")[0].style.webkitAnimationPlayState = "running"
    element.style.display = "none";
    element.parentNode.getElementsByClassName("pauseLoop")[0].style.display = "block"
}

function closeLoopFunction(elementId) {
    document.getElementById(elementId).style.display = "none"
}