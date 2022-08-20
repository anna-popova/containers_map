class ErrorRepository {
	constructor() {
		this.errors = new Map();
	}

	add(errorCode, errorText) {
		this.errors.set(errorCode, errorText);
	}

	translate(code) {
		this.errors.forEach((value, key) => {
			// console.log(value);
			// console.log(key);

			if (key === code) {
				return value;
			} else {
				return 'Unknown error';
			}
		});
	}
}

const map = new ErrorRepository();


map.add(1, 'EvalError');
map.add(2, 'RangeError');
map.add(3, 'ReferenceError');

console.log(map);

console.log(map.translate(1));