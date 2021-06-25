const toggle = document.getElementById('toggle');
const label = document.getElementById('label');

toggle.addEventListener('change', () => {
	if (toggle.checked) {
		document.body.style.backgroundColor = 'hsl(0, 0%, 30%)';
		document.body.style.color = 'hsl(0, 0%, 90%)';
		label.style.backgroundColor = 'hsl(0, 0%, 90%)';
	} else {
		document.body.style.backgroundColor = 'hsl(0, 0%, 90%)';
		document.body.style.color = 'hsl(0, 0%, 30%)';
		label.style.backgroundColor = 'hsl(0, 0%, 30%)';
	}
});
