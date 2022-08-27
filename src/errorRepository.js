export default class ErrorRepository {
	constructor(key, value) {
		this.key = key;
		this.value = value;

		this.errors = new Map();
		this.errors.set(400, 'Bad Request');
		this.errors.set(401, 'Unauthorized');
		this.errors.set(500, 'Internal Server Error');
		this.errors.set(501, 'Not Implemented');
	}

	translate(code) {
		if (this.errors.has(code)) {
			return this.errors.get(code);
		}
			return 'Unknown error';
		}
}
