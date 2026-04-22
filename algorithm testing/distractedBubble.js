async function distractedBubble() {
	let sorted = false;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < distractedArray.length; i++) {
			if (distractedArray[i] > distractedArray[i + 1]) {
				[distractedArray[i], distractedArray[i + 1]] = [
					distractedArray[i + 1],
					distractedArray[i],
				];
				await timeout(30);
				updateDistracted();

				if (Math.random() >= 0.7) {
					await timeout(60);
					[distractedArray[i], distractedArray[i + 1]] = [
						distractedArray[i + 1],
						distractedArray[i],
					];
					updateDistracted();
					await timeout(30);
					[distractedArray[i], distractedArray[i + 1]] = [
						distractedArray[i + 1],
						distractedArray[i],
					];
					updateDistracted();
				}
				sorted = false;
				updateDistracted();
			}
		}
	}
}
