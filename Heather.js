let i = 1,
letterInterval = 100,
pauseBetweenWords = 300; //ms
const sentence = `Hello lovely world. I think it's gonna be a really beautiful day!`;
const words = sentence.split(' ');
let index = 0;
const runTyping = (ms) => setTimeout(() => showText(), ms);

function showText() {
	const text = words[index];
	$w('#text1').text = text.slice(0, i);
	i = (i + 1) % (text.length + 1);
	if (i > 0) {
		runTyping(letterInterval);
	} else {
		index++;
		index %= (words.length);
		runTyping(pauseBetweenWords);
	}
}
$w.onReady(() => runTyping(letterInterval));
