const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let previousSong = undefined;

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;

	btn.addEventListener('click', () => {
		console.log('i am here');
		// stopSongs();
		if (previousSong !== undefined) {
			document.getElementById(previousSong).pause();
			document.getElementById(previousSong).currentTime = 0;
			previousSong = undefined;
		} else {
			if(previousSong )
			document.getElementById(sound).play();
			previousSong = sound;
		}

		// if (previousSong === sound) {
		// 	document.getElementById(sound).pause();
		// }
		// try {
		// 	document.getElementById(previousSong).pause();
		// } catch (err) {}
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
