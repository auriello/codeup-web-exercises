"use strict";

$(document).keyup(function(event){
    console.log(event.keyCode);
});


// allowed keys
let keysallowed = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the Konami Code sequence
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    let key = keysallowed[e.keyCode];
    // get the value of the required key from the konami code
    let requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        // konamiCodePosition = 0;
        alert("incorrect Konami code");
    }
});

function activateCheats() {

    // ask about image during walk through. this lesson was easy but execution was a bit hard for me. I looked at another code. Will try to do this again from scratch tonight :)


    alert("You have added 30 lives !!!!");
}






// // HERES ANOTHER WAY TO DO THIS//////
// let konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]