const bubbleNumbers = generateRandomNumberArray(50);
const distractedArray = generateRandomNumberArray(50);
const cocktailArray = generateRandomNumberArray(50);

const bubble = document.getElementById("bubble");
const distracted = document.getElementById("distracted");
const cocktail = document.getElementById("cocktail");

function generateRandomNumberArray(length) {
	return Array.from({ length }).map((_) => Math.ceil(Math.random() * length));
}
