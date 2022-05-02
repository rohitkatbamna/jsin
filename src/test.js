function* recursive(num) {
	if (num === 0) {
		return 1;
	} else {
		yield* recursive(num - 1) * num;
	}
}
console.log(...recursive(5));
