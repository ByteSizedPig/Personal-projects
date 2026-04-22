//first attempt at fisher yates
function fisherYatesShuffleOn2(update, array) {
	let toShuffle = array.slice();
	let shuffled = [];
	for (let i = 0; i < array.length; i++) {
		let n = toShuffle[Math.floor(Math.random() * toShuffle.length)];
		let index = toShuffle.indexOf(n);

		shuffled.push(n);
		toShuffle.splice(index, 1);
	}
	array = shuffled;
	update();
}

async function fisherYatesShuffle(update, array) {
	for (let i = 0; i < array.length; i++) {
		let j = Math.floor(Math.random() * array.length);
		[array[i], array[j]] = [array[j], array[i]];
		await timeout(60);
		update();
	}
}

function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function sortAll() {
	sort(bubbleNumbers);
	distractedBubble();
	cocktailSort();
}

function shuffleAll() {
	fisherYatesShuffle(updateBubble, bubbleNumbers);
	fisherYatesShuffle(updateDistracted, distractedArray);
	fisherYatesShuffle(updateCocktail, cocktailArray);
}
