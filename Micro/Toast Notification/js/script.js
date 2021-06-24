const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
	createNotification();
});

function createNotification() {
	const notify = document.createElement('div');
	notify.classList.add('toast');
	// container.classList.add('toast');
	notify.innerHTML = 'Test Text';
	console.log(notify);
	container.appendChild(notify);

	setTimeout(() => {
		notify.remove();
	}, 2000);
}
