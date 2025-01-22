export const isArray = (value: any): value is any[] => Array.isArray(value);
export const isString = (value: any): value is string =>
  typeof value === "string";
export const isFunction = (value: any): value is Function =>
  typeof value === "function";
export const isObject = (value: any): value is object =>
  Object.prototype.toString.call(value) === "[object Object]";
export const hasLength = (arg: any): boolean => Boolean(arg && arg.length > 0);
export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";
export const isDate = (value: any): value is Date =>
  value instanceof Date && !isNaN(value as any);
export const isNumber = (value: any): value is number =>
  typeof value === "number";
export const isObjectEmpty = (value: any): boolean =>
  Object.keys(value).length === 0;
export const isStringHasLength = (value: any): boolean =>
  isString(value) && hasLength(value);
export const isStringEmpty = (value: any): boolean =>
  isString(value) && !hasLength(value);
export const isArrayHasLength = (value: any): boolean =>
  isArray(value) && hasLength(value);
export const isArrayEmpty = (value: any): boolean =>
  isArray(value) && !hasLength(value);
export const isObjectHasProps = (value: any): boolean =>
  isObject(value) && !isObjectEmpty(value);
export const isBooleanTruthy = (value: any): boolean =>
  isBoolean(value) && value;
export const isBooleanFalsey = (value: any): boolean =>
  isBoolean(value) && !value;
export const isHTML = (value: any): boolean => {
  const htmlRegex = /<[^>]*>/g;
  return htmlRegex.test(value);
};
