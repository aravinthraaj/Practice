const popup_btn = document.getElementById('popup-btn');
const close_btn = document.getElementById('close-btn');

const container = document.getElementById('container');
const popup = document.getElementById('popup');

popup_btn.addEventListener('click', () => {
	container.classList.add('active');
});

close_btn.addEventListener('click', () => {
	container.classList.remove('active');
});
