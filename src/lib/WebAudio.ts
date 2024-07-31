// borrowed and modified from https://github.com/TheNotary/webAudioApiForDesigners/blob/master/webAudioApiForDesigners.js

// Browser detection required (guess which browsers are at faul =P)
var isSafari = navigator.userAgent.indexOf("Safari") != -1;
var isIe = navigator.userAgent.indexOf("MSIE") != -1;
var isFireFox = navigator.userAgent.indexOf("Firefox") != -1; // not this one ^^

// We need to check if this system has the webAudioContext defined.
// As of right now chrome will, but firefox won't because they just started implimenting
if (typeof (webkitAudioContext) == "undefined" && typeof (mozAudioContext) == "undefined") {
    window.webkitAudioContext = function () { throw "Web Audio API not supported in this browser"; };
}

// you'll put the PCM audio in here
var audioBuffer = null;
//var context = new webkitAudioContext();

// You can initialize with the parameter true to actually enable the audio fallback on
// IE.  This is not recommended and is subject to change if a later version of this framework is written
function initAudioContext(enableIe) {
    var context; // this is our web audio context, our way of
    // controlling and keeping track all of our sounds.
    try {
        if (typeof (mozAudioContext) != "undefined") {
            context = new mozAudioContext();
        }
        else {
            context = new webkitAudioContext();
        }
    }
    catch (e) {
        // alert('Web Audio API is not supported in this browser.  HTML 5 Audio Elements will be used instead.');
        if (isIe && !enableIe) {
            console.log(`Audio is disabled.`)
        }

        context = new fallbackAudioContext();
    }

    context.buffers = {};
    context.fallbackBuffers = {};
    return context;
}

function fallbackAudioContext() {
    this.buffers = {};
}

function getAudioContext() {
    return webkitAudioContext;
}

function loadSound(url, variableToBufferSound) {
    const context = getAudioContext();
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    // Decode asynchronously
    request.onload = function () {
        context.decodeAudioData(request.response, function (buffer) {
            //variableToBufferSoundIn = buffer;
            context.buffers[variableToBufferSound] = buffer;
        }, onError);
    }
    request.send();
}

function onError(e) {
    console.error("Error in audio engine:", e);
}

export function initAudio() {
}

export function playSound(bufferName) {

    // creates a sound source
    var source = context.createBufferSource();

    // tell the source which sound to play
    source.buffer = bufferName;

    // connect the source to the context's destination (the speakers)
    source.connect(context.destination);

    // play the source now
    source.noteOn(0);
}
