function visualizeSort() {
	let html = "";
	for (let i = 0; i < numbers.length; i++) {
		html += /*HTML*/ `<div style="height: ${numbers[i] * 13}px" class="rectangle"></div>`;
	}
	return html;
}

//TODO: refactor this shite so that it's not O(n²)
function fisherYatesShuffleOn2() {
	let toShuffle = numbers.slice();
	let shuffled = [];
	for (let i = 0; i < numbers.length; i++) {
		let n = toShuffle[Math.floor(Math.random() * toShuffle.length)];
		let index = toShuffle.indexOf(n);

		shuffled.push(n);
		toShuffle.splice(index, 1);
	}
	numbers = shuffled;
	updateBubble();
}

function fisherYatesShuffle() {
	for (let i = 0; i < numbers.length; i++) {
		let j = Math.floor(Math.random() * numbers.length);
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}
	updateBubble();
}

// finish this
function timeout() {
	const time = setTimeout(() => {}, 100);
}

//TODO: add timer for sorts!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
