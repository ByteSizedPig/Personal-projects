function sort(unsorted) {
	let sorted = true;
	//TODO: Refactor loop functionality
	for (let i = 0; i < unsorted.length - 1; i++) {
		if (unsorted[i] > unsorted[i + 1]) {
			[unsorted[i], unsorted[i + 1]] = [unsorted[i + 1], unsorted[i]];
			updateBubble();
			sorted = false;
		}
	}

	if (!sorted) sort(unsorted);
}
