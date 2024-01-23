// dummy class to show testing by mocha 

class Student {
	constructor() {

	}

	home(type) {
		let result = this.getInfo(type, 1);
		return result + 5;
	}

	getInfo(type, number) {
		return 5
	}

	finalMarks(total) {
		let incremented = this.increment(total);
		let decremented = this.decrement(total);
		this.decrement(total - 1);
		return incremented + decremented;
	}

	increment(total) {
		return total + 1;
	}

	decrement(total) {
		return total - 1;
	}

	fetchData() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(10);
			}, 3000);
		})
	}
}

module.exports = Student; 