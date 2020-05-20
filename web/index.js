let track = () => {
    document.getElementById('time').innerText = new Date().getTime()
}

let loop = setInterval(track, 1000)

let metronome = true;
let metronomeSpeed = 125;
let loop4 = setInterval(() => {
    if (metronome)
        document.getElementById('metronome').classList.add('active')
    else
        document.getElementById('metronome').classList.remove('active')

    metronome = !metronome;
}, metronomeSpeed)


function fullscreen() {
    document.body.requestFullscreen();
}

for (let i = 1; i <= 8; i++) {

    let note = document.getElementById('note' + i);
    let oscillator;

    note.addEventListener("mousedown", () => {
        note.classList.add('active')
        oscillator = beep(20, 200 / i * 2, 30)
    }, true);
    note.addEventListener("mouseup", () => {
        note.classList.remove('active')
        oscillator.stop()
    }, true);
}

let audioContext = new AudioContext()

function beep(vol, freq, duration) {
    let oscillator = audioContext.createOscillator()
    let gain = audioContext.createGain()
    oscillator.connect(gain)
    oscillator.frequency.value = freq
    oscillator.type = "square"
    gain.connect(audioContext.destination)
    gain.gain.value = vol * 0.01
    oscillator.start(audioContext.currentTime)
    // oscillator.stop(audioContext.currentTime + duration * 0.001)
    return oscillator;
}

function metronomeChange() {
    metronomeSpeed = metronomeSpeed * 2;
    if (metronomeSpeed === 2000)
        metronomeSpeed = 125;

    console.log()
}
