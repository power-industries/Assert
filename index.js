export default class Assert {
	static isUndefined(value) {
		return value === undefined;
	}

	static isNull(value) {
		return value === null;
	}

	static isBoolean(value) {
		return typeof value === 'boolean';
	}

	static isNumber(value) {
		return typeof value === 'number';
	}

	static isNumerical(value) {
		return Number.isFinite(value);
	}

	static isInteger(value) {
		return Number.isSafeInteger(value);
	}

	static isBigInt(value) {
		return typeof value === 'bigint';
	}

	static isNaN(value) {
		return Number.isNaN(value);
	}

	static isInfinite(value) {
		return value === Infinity || value === -Infinity;
	}

	static isString(value) {
		return typeof value === 'string';
	}

	static isArray(value) {
		return Array.isArray(value);
	}

	static isSet(value) {
		return value instanceof Set;
	}

	static isObject(value) {
		return Object.prototype.toString.call(value) === '[object Object]';
	}

	static isMap(value) {
		return value instanceof Map;
	}

	static isSymbol(value) {
		return typeof value === 'symbol';
	}

	static isFunction(value) {
		return typeof value === 'function';
	}
}