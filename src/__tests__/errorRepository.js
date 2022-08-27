import ErrorRepository from '../errorRepository';

const map = new ErrorRepository(1, 'Коды ответа HTTP');

test('test ErrorRepository class for code 400', () => {
	const result = map.translate(400);
	expect(result).toBe('Bad Request');
});

test('test ErrorRepository class for code 401', () => {
	const result = map.translate(401);
	expect(result).toBe('Unauthorized');
});

test('test ErrorRepository class for Unknown error', () => {
	const result = map.translate(402);
	expect(result).toBe('Unknown error');
});

test('test ErrorRepository class for code 500', () => {
	const result = map.translate(500);
	expect(result).toBe('Internal Server Error');
});

test('test ErrorRepository class for code 501', () => {
	const result = map.translate(501);
	expect(result).toBe('Not Implemented');
});
