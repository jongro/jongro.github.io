var canvas = document.getElementById("canvas")
var tone = document.getElementById("tone")


//create an effect and connect it to the master output
var reverb = new Tone.Freeverb(0.94, 300).toMaster();
reverb.wet.value = 1;


//create a synth and connect it to the effect
var synth = new Tone.Synth().connect(reverb);


function playMusic(event) {


    var tones = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"]

    var yabs = event.clientY
    
    var canvasHeight = canvas.clientHeight + 8

    var yrel = yabs / canvasHeight * 100

    var yfloor = (Math.floor(yrel / (100/tones.length)) - (tones.length - 1)) * -1
    tone.innerHTML = tones[yfloor];

    synth.triggerAttack(tones[yfloor], '16n')
}

function stopMusic() {
    synth.triggerRelease()
}


canvas.addEventListener("mousedown", playMusic)
addEventListener("mouseup", stopMusic)
canvas.addEventListener("touchstart", playMusic)
addEventListener("touchend", stopMusic)

