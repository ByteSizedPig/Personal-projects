async function cocktailSort() {
	let sorted = true;
	let start = 0;
	let end = cocktailArray.length - 1;

	for (let i = start; i < end; i++) {
		if (cocktailArray[i] > cocktailArray[i + 1]) {
			[cocktailArray[i], cocktailArray[i + 1]] = [
				cocktailArray[i + 1],
				cocktailArray[i],
			];
			updateCocktail();
			await timeout(30);
			sorted = false;
		}
	}

	for (let i = end - 1; i > start; i--) {
		if (cocktailArray[i] > cocktailArray[i + 1]) {
			[cocktailArray[i], cocktailArray[i + 1]] = [
				cocktailArray[i + 1],
				cocktailArray[i],
			];
			updateCocktail();
			await timeout(30);
		}
	}
	start++;
	end--;
	if (!sorted) cocktailSort();
}
