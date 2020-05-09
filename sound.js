var canvas = document.getElementById("canvas")
var tone = document.getElementById("tone")


var reverb = new Tone.Reverb({ decay : 8, preDelay : 0}).toMaster()
reverb.generate()
reverb.wet.value = 1;

var synth = new Tone.Synth({
    oscillator: {
      type: 'fatsawtooth',
      partialCount : 20,
      spread: 100,
      count: 20
    },
    envelope: {
      attack: 2,
      decay: 2,
      sustain: 1,
      release: 2
    }
  }).connect(reverb);





//create a synth and connect it to the effect
//var synth = new Tone.Synth().connect(reverb);


function playMusic(event) {


    var tones = ["A1", "C2", "E2", "G2", "B2", "A2", "C3", "E3", "G3", "B3", "A3", "C4", "E4", "G4", "B4"]

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