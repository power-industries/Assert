const Assert = require('./index');

describe('Testing AssertJS', () => {
	test('Testing Undefined', () => {
		expect(Assert.isUndefined(undefined)).toBeTruthy();
	});
	test('Testing Null', () => {
		expect(Assert.isNull(null)).toBeTruthy();
	});
	test('Testing Boolean', () => {
		expect(Assert.isBoolean(true)).toBeTruthy();
	});
	test('Testing Number', () => {
		expect(Assert.isNumber(123)).toBeTruthy();
	});
	test('Testing Integer', () => {
		expect(Assert.isInteger(123)).toBeTruthy();
	});
	test('Testing Float', () => {
		expect(Assert.isFloat(123.45)).toBeTruthy();
	});
	test('Testing BigInt', () => {
		expect(Assert.isBigInt(123n)).toBeTruthy();
	});
	test('Testing NaN', () => {
		expect(Assert.isNaN(NaN)).toBeTruthy();
	});
	test('Testing Infinite', () => {
		expect(Assert.isInfinite(Infinity)).toBeTruthy();
	});
	test('Testing String', () => {
		expect(Assert.isString("Hello World")).toBeTruthy();
	});
	test('Testing Array', () => {
		expect(Assert.isArray([1, 2, 3])).toBeTruthy();
	});
	test('Testing Object', () => {
		expect(Assert.isObject({a: 1, b: 2})).toBeTruthy();
	});
	test('Testing Symbol', () => {
		expect(Assert.isSymbol(Symbol())).toBeTruthy();
	});
	test('Testing Function', () => {
		expect(Assert.isFunction(() => {})).toBeTruthy();
	});
});