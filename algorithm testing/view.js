function visualizeArray(array) {
	let html = "";
	for (let i = 0; i < array.length; i++) {
		html += /*HTML*/ `<div style="height: ${array[i] * 2}%" class="rectangle"></div>`;
	}
	return html;
}

updateBubble();
function updateBubble() {
	bubble.innerHTML = /*HTML*/ `
    <button onclick="sort(bubbleNumbers)">sort</button>
    <button onclick="fisherYatesShuffle(updateBubble, bubbleNumbers)">shuffle</button>
    ${visualizeArray(bubbleNumbers)}
`;
}

updateDistracted();
function updateDistracted() {
	distracted.innerHTML = /*HTML*/ `
    <button onclick="distractedBubble()">sort</button>
    <button onclick="fisherYatesShuffle(updateDistracted, distractedArray)">shuffle</button>
    ${visualizeArray(distractedArray)}
`;
}

updateCocktail();
function updateCocktail() {
	cocktail.innerHTML = /*HTML*/ `
    <button onclick="cocktailSort()">sort</button>
    <button onclick="fisherYatesShuffle(updateCocktail, cocktailArray)">shuffle</button>
    ${visualizeArray(cocktailArray)}
`;
}
