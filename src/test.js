const obj = {
	start: 10,
	end: 15,
	*[Symbol.iterator]() {
		for (let cnt = this.start; cnt <= this.end; cnt++) {
			yield cnt;
		}
	},
};
console.log([...obj]);