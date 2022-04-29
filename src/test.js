let obj = {
	start: 10,
	end: 15,
	[Symbol.iterator]() {
		return this;
	},
	next() {
		if (this.start <= this.end) {
			return { value: this.start++, done: false };
		} else {
			return { done: true };
		}
	},
};
for (let i of obj) {
	console.log(i);
}
