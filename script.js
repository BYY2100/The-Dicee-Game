const refreshButton = document.querySelector('.refresh');

refreshButton.addEventListener('click', function() {
	const imgSrc = [
		'images/dice1.png',
		'images/dice2.png',
		'images/dice3.png',
		'images/dice4.png',
		'images/dice5.png',
		'images/dice6.png'
	];
	let random1 = Math.floor(Math.random() * imgSrc.length);
	let random2 = Math.floor(Math.random() * imgSrc.length);

	const player1 = document.querySelector('.img1');
	const player2 = document.querySelector('.img2');

	player1.src = `${imgSrc[random1]}`;
	player2.src = `${imgSrc[random2]}`;

	const result = document.querySelector('.result');

	if (random1 > random2) {
		result.innerText = '🚩 Player 1 Wins!';
	} else if (random2 > random1) {
		result.innerText = 'Player 2 Wins! 🚩';
	} else {
		result.innerText = 'Draw!';
	}
	refreshButton.innerText = 'Try Again!';
});
