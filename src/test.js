function* gen() {
	try {
		yield "One";
		yield "Two";
	} catch (err) {
		console.log("Error " + err);
	}
}
const gobj = gen();
console.log(gobj.next());
console.log(gobj.throw());
