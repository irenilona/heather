
let interval = [];

// -------------- USER - INTERFACE --------------------
let txtInput = [];
    txtInput[0] = "Website Designer \n SEO Analyst"; 
    txtInput[1] = "What the hell!!! Another text showing as Type-Writer-Effect???"; 
    txtInput[2] = "Wow, it's amazing!!!"; 

let DELAY = 500;
let timeInterval = 50;
let SYMBOL = "|"
// -------------- USER - INTERFACE --------------------


$w.onReady(async function() {
    for (let i = 0; i < txtInput.length; i++) {const element = txtInput[i]; xxx(i);}

    function xxx(value){
        setTimeout(()=>{
            let typeIdx = 0, displayStr = "", endingString = SYMBOL;
            interval[value] = setInterval(() => {
                displayStr = displayStr + txtInput[value][typeIdx]
                typeIdx++

                $w("#twInput"+value).text = displayStr + endingString

                typeIdx === txtInput[value].length && clearInterval(interval[value]);
            }, timeInterval)
        },DELAY);
        DELAY=DELAY+500;
    }    
});
