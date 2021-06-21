const daysEl = document.getElementById('day');
const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minute');
const secondsEl = document.getElementById('second');
const newYear = '1 Jan 2022';

function countdown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();
	const totalseconds = (newYearDate - currentDate) / 1000;
	const days = Math.floor(
		totalseconds / (24 * 60 * 60)
	); /*Hours * Minutes * Seconds*/
	const hours = Math.floor(totalseconds / (60 * 60)) % 24; //modulos gives the remaining hours
	const minutes = Math.floor(totalseconds / 60) % 60;
	const seconds = Math.floor(totalseconds) % 60;
	console.log(days, hours, minutes, seconds);

	daysEl.innerHTML = formattime(days);
	hoursEl.innerHTML = formattime(hours);
	minutesEl.innerHTML = formattime(minutes);
	secondsEl.innerHTML = formattime(seconds);
}
function formattime(time) {
	return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
