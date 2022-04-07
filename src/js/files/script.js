const timer = document.querySelector('.timer__time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let begin = null;
let stopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
	
	if (begin === null && flag === false) {
		begin = new Date();
		
	}
	if (stopped !== null && flag === false) {
		stoppedDuration += (new Date() - stopped);
	}
	if (flag === false) {
		startInterval = setInterval(clockRunning, 0);
	}
	flag = true;
	stopButton.classList.remove('active');
	startButton.classList.add('active');
}

function clockRunning() {
	let currentTime = new Date();
	let timeElapsed = new Date(currentTime - begin - stoppedDuration);
	let minutes = timeElapsed.getUTCMinutes();
	let seconds = timeElapsed.getUTCSeconds();
	let milliseconds = timeElapsed.getUTCMilliseconds();
	milliseconds = Math.floor(milliseconds/10);
	timer.innerHTML = (minutes = minutes < 10 ? '0' + minutes : minutes) + ' : ' +
	(seconds = seconds < 10 ? '0' + seconds : seconds) + ' : ' + (milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds);

}

function stopTimer() {
	stopped = new Date();
	clearInterval(startInterval);
	flag = false;
	stopButton.classList.add('active');
	startButton.classList.remove('active');
}

function resetTimer() {
	clearInterval(startInterval);
	begin = null;
	stopped = null;
 	stoppedDuration = 0;
	timer.innerHTML = "00 : 00 : 00";
	flag = false;
	stopButton.classList.remove('active');
	startButton.classList.remove('active');
	resetButton.classList.add('active');
	setTimeout(() => {
		resetButton.classList.remove('active');
	}, 800);
	
}