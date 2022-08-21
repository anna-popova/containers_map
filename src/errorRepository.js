const errors = new Map();

class ErrorRepository {
	constructor(code, value) {
		this.code = code;
		this.value = value;  

	//? не совсем понимаю, как в данном случае корректней добавлять свойства в коллекцию Map. первый или второй вариант корректный?
	errors.set(this.code, this.value);
	// errors.set(this, {
	//   key: this.code,
	//   value: this.value
	// });
	}

	//? так это выглядит? мы осуществляет поиск по коллекции Map, но при это метод используем на экземпляре прототипа класса? не очень понятно..
	translate(code) {
		if (this.code === code) {
		return errors.get(code);
		} else {
		return 'Unknown error';
		}
	}
}

const map1 = new ErrorRepository(400, 'Bad Request');
const map2 = new ErrorRepository(401, 'Unauthorized');
const map3 = new ErrorRepository(500, 'Internal Server Error');
const map4 = new ErrorRepository(501, 'Not Implemented');
console.log(errors);

console.log(map1.translate(400));
console.log(map1.translate(500));
console.log(map2.translate(401));
console.log(map2.translate(402));
console.log(map3.translate(500));
console.log(map3.translate(400));
console.log(map4.translate(501));
console.log(map4.translate(401));
