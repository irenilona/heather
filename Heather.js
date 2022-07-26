let origText;
let currText;
let textfield;
$w.onReady(function () {
    textfield= $w('#yourText') //textfield where the text will be put
    origText = textfield.text;  //The original text
    currText = origText;    //The text currently being displayed
    erase()
    blink()
});

//Removes the last letter until nothing is left, then starts the write() function
function erase() {
    let intervalID = setInterval(function () {
        currText = currText.slice(0, -1);
        textfield.text = currText
        if (currText.length == 0) {
            setTimeout(function () { write() }, 300)
            clearInterval(intervalID)
        }
    }, 400);

}

//Adds letters until all have been added, then starts erase()
function write() {
    let intervalID = setInterval(function () {
        currText += origText.charAt(currText.length)
        textfield.text=currText
        if (currText.length == origText.length) {
            setTimeout(function () { erase() }, 300)

            clearInterval(intervalID)
        }
    }, 400);
}

//makes the vertical line blink
function blink() {
    const linje = $w('#blinkingLine');
    setInterval(function () {
        if (linje.hidden) {
            linje.show()
        } else {
            linje.hide()
        }

    }, 600);

}
