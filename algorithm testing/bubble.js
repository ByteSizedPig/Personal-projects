async function sort(unsorted) {
	console.log("test");
	let sorted = true;
	for (let i = 0; i < unsorted.length - 1; i++) {
		if (unsorted[i] > unsorted[i + 1]) {
			[unsorted[i], unsorted[i + 1]] = [unsorted[i + 1], unsorted[i]];
			updateBubble();
			await timeout(30);
			sorted = false;
		}
	}

	if (!sorted) sort(unsorted);
}
