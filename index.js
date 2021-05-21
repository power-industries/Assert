module.exports = {
	isUndefined: (value) => {
		return value === undefined; 
	},
	isNull: (value) => {
		return value === null;
	},
	isBoolean: (value) => {
		return typeof value === 'boolean';
	},
	isNumber: (value) => {
		return Number.isFinite(value);
	},
	isInteger: (value) => {
		return Number.isSafeInteger(value);
	},
	isFloat: (value) => {
		return Number.isFinite(value) && !Number.isSafeInteger(value);
	},
	isBigInt: (value) => {
		return typeof value === 'bigint';
	},
	isNaN: (value) => {
		return Number.isNaN(value);
	},
	isInfinite: (value) => {
		return value === Infinity || value === -Infinity;
	},
	isString: (value) => {
		return typeof value === 'string';
	},
	isArray: (value) => {
		return Array.isArray(value);
	},
	isObject: (value) => {
		return Object.prototype.toString.call(value) === '[object Object]';
	},
	isSymbol: (value) => {
		return typeof value === 'symbol';
	},
	isFunction: (value) => {
		return typeof value === 'function';
	}
}