let a = 8;
let ageErr = new Error("Age Error");
try {
	if (a < 18) {
		throw ageErr;
	}
} catch (seem) {
	console.log(seem.message);
}
