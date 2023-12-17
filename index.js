export const isArray = (value) => Array.isArray(value);

export const isString = (value) => typeof value === "string";

export const isFunction = (value) => typeof value === "function";

export const isObject = (value) =>
  Object.prototype.toString.call(value) === "[object Object]";

export const hasLength = (arg) => Boolean(arg && arg.length > 0);

export const isBoolean = (value) => typeof value === "boolean";

export const isDate = (value) => value instanceof Date && !isNaN(value);

export const isNumber = (value) => typeof value === "number";

export const isObjectEmpty = (value) => Object.keys(value).length === 0;

export const isStringHasLength = (value) => isString(value) && hasLength(value);

export const isStringEmpty = (value) => isString(value) && !hasLength(value);

export const isArrayHasLength = (value) => isArray(value) && hasLength(value);

export const isArrayEmpty = (value) => isArray(value) && !hasLength(value);

export const isObjectHasProps = (value) =>
  isObject(value) && !isObjectEmpty(value);

export const isBooleanTruthy = (value) => isBoolean(value) && value;

export const isBooleanFalsey = (value) => isBoolean(value) && !value;

export const isHTML = (value) => {
  const htmlRegex = /<[^>]*>/g;
  return htmlRegex.test(value);
};
