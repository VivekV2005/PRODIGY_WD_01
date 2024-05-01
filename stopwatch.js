const stopwatch = document.querySelector('.stopwatch .display');
let intervalId;
let time = 0;

function startStopwatch() {
	clearInterval(intervalId);
	intervalId = setInterval(() => {
		time++;
		let hours = Math.floor(time / 3600);
		let minutes = Math.floor((time % 3600) / 60);
		let seconds = time % 60;
		stopwatch.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	}, 1000);
}

function stopStopwatch() {
	clearInterval(intervalId);
}

function resetStopwatch() {
	clearInterval(intervalId);
	time = 0;
	stopwatch.textContent = '00:00:00';
}

document.querySelector('.stopwatch .start').addEventListener('click', startStopwatch);
document.querySelector('.stopwatch .stop').addEventListener('click', stopStopwatch);
document.querySelector('.stopwatch .reset').addEventListener('click', resetStopwatch);