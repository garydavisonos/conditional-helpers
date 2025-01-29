/**
 * Checks if the provided value is an array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
export const isArray = (value: any): value is any[] => {
  return Array.isArray(value);
}

/**
 * Checks if the provided value is of type string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string, false otherwise.
 */
export const isString = (value: any): value is string => {
  return typeof value === "string";
}

/**
 * Checks if the provided value is a function.
 *
 * @param value - The value to check.
 * @returns True if the value is a function, false otherwise.
 */
export const isFunction = (value: any): value is Function => {
  return typeof value === "function";
}

/**
 * Checks if the provided value is an object.
 *
 * @param value - The value to check.
 * @returns True if the value is an object, false otherwise.
 */

export const isObject = (value: any): value is object => {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * Checks if the provided value has a length greater than 0.
 *
 * @param arg - The value to check.
 * @returns True if the value has a length greater than 0, false otherwise.
 */
export const hasLength = (arg: any): boolean =>  {
  return Boolean(arg && arg.length > 0);
}

/**
 * Checks if the provided value is of type boolean.
 *
 * @param value - The value to check.
 * @returns True if the value is a boolean, false otherwise.
 */

export const isBoolean = (value: any): value is boolean => {
  return typeof value === "boolean";
};

/**
 * Checks if the provided value is a valid Date object.
 *
 * @param value - The value to check.
 * @returns True if the value is a Date object and not invalid, false otherwise.
 */

export const isDate = (value: any): value is Date => {
  return value instanceof Date && !isNaN(value as any);
}

/**
 * Checks if the provided value is a number.
 *
 * @param value - The value to check.
 * @returns True if the value is a number, false otherwise.
 */
export const isNumber = (value: any): value is number => {
  return typeof value === "number";
}

/**
 * Checks if the provided object is empty.
 *
 * @param value - The object to check.
 * @returns True if the object has no own enumerable properties, false otherwise.
 */

export const isObjectEmpty = (value: any): boolean => {
  return Object.keys(value).length === 0;
}

/**
 * Checks if the provided value is a non-empty string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string with length greater than 0, false otherwise.
 */

export const isStringHasLength = (value: any): boolean => {
  return isString(value) && hasLength(value);
}

/**
 * Checks if the provided value is an empty string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string with length 0, false otherwise.
 */
export const isStringEmpty = (value: any): boolean => {
  return isString(value) && !hasLength(value);
}

/**
 * Checks if the provided value is a non-empty array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array with length greater than 0, false otherwise.
 */
export const isArrayHasLength = (value: any): boolean => {
  return isArray(value) && hasLength(value);
}

/**
 * Checks if the provided value is an empty array.
 *
 * @param value - The value to check.
 * @returns True if the value is an array with length 0, false otherwise.
 */

export const isArrayEmpty = (value: any): boolean => {
  return isArray(value) && !hasLength(value);
}
  
/**
 * Checks if the provided value is a non-empty object.
 *
 * @param value - The value to check.
 * @returns True if the value is an object with own enumerable properties, false otherwise.
 */
export const isObjectHasProps = (value: any): boolean => {
  return isObject(value) && !isObjectEmpty(value);
}

/**
 * Checks if the provided value is a truthy boolean.
 *
 * @param value - The value to check.
 * @returns True if the value is a boolean and truthy, false otherwise.
 */

export const isBooleanTruthy = (value: any): boolean => {
  return isBoolean(value) && value;
}

/**
 * Checks if the provided value is a falsy boolean.
 *
 * @param value - The value to check.
 * @returns True if the value is a boolean and falsy, false otherwise.
 */
export const isBooleanFalsey = (value: any): boolean => {
  return isBoolean(value) && !value;
} 

/**
 * Checks if the provided value is a string containing HTML.
 *
 * @param value - The value to check.
 * @returns True if the value is a string containing HTML, false otherwise.
 */
export const isHTML = (value: any): boolean => {
  const htmlRegex = /<[^>]*>/g;
  return htmlRegex.test(value);
};
