const filepaths = [
	'Auto Typing',
	'Background changer',
	'Carousel',
	'Hamburger',
	'Popup',
	'Rainfall Animation',
	'Sound Board',
	'Toggle Theme',
	'Toast Notification',
];
const container = document.createElement('div');
container.classList.add('display-link');
document.body.appendChild(container);

filepaths.forEach((path) => {
	const link = document.createElement('a');
	link.href = `./Micro/${path}/index.html`;
	link.innerText = path;
	console.log(link);
	container.appendChild(link);
});
