const text = 'Hey Dude! you found me :)';

let index = 0;

function autoType() {
	document.body.innerText = text.slice(0, index);
	index++;
	if (index > text.length) {
		index = 0;
	}
}

setInterval(autoType, 100);
