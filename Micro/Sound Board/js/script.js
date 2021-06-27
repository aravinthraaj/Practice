const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let previousSong;

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;

	btn.addEventListener('click', () => {
		// stopSongs();
		try {
			document.getElementById(previousSong).pause();
		} catch (err) {}

		document.getElementById(sound).play();
		previousSong = sound;
	});

	document.body.appendChild(btn);
});

// function stopSongs() {
//     sounds.forEach((sound) => {
//         const song = document.getElementById(sound);

//         song.pause();
//         song.currentTime = 0;
//     });
// }
