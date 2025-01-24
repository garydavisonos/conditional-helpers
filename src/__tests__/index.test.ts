import {
  isArray,
  isString,
  isFunction,
  isObject,
  hasLength,
  isBoolean,
  isDate,
  isNumber,
  isObjectEmpty,
  isStringHasLength,
  isStringEmpty,
  isArrayHasLength,
  isArrayEmpty,
  isObjectHasProps,
  isBooleanTruthy,
  isBooleanFalsey,
  isHTML,
} from "../index";

test("isArray should return true for arrays", () => {
  expect(isArray([])).toBe(true);
  expect(isArray("hello")).toBe(false);
});

test("isString should return true for strings", () => {
  expect(isString("")).toBe(true);
  expect(isString(123)).toBe(false);
});

test("isFunction should return true for functions", () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction("hello")).toBe(false);
});

test("isObject should return true for objects", () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
});

test("hasLength should return true for non-empty arrays and strings", () => {
  expect(hasLength("hello")).toBe(true);
  expect(hasLength(["hello"])).toBe(true);
  expect(hasLength([])).toBe(false);
  expect(hasLength({})).toBe(false);
});

test("isBoolean should return true for booleans", () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(123)).toBe(false);
});

test("isDate should return true for dates", () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate("hello")).toBe(false);
});

test("isNumber should return true for numbers", () => {
  expect(isNumber(123)).toBe(true);
  expect(isNumber("hello")).toBe(false);
});

test("isObjectEmpty should return true for empty objects", () => {
  expect(isObjectEmpty({})).toBe(true);
  expect(isObjectEmpty({ a: 1 })).toBe(false);
});

test("isStringHasLength should return true for non-empty strings", () => {
  expect(isStringHasLength("hello")).toBe(true);
  expect(isStringHasLength("")).toBe(false);
});

test("isStringEmpty should return true for empty strings", () => {
  expect(isStringEmpty("")).toBe(true);
  expect(isStringEmpty("hello")).toBe(false);
});

test("isArrayHasLength should return true for non-empty arrays", () => {
  expect(isArrayHasLength([1, 2, 3])).toBe(true);
  expect(isArrayHasLength([])).toBe(false);
});

test("isArrayEmpty should return true for empty arrays", () => {
  expect(isArrayEmpty([])).toBe(true);
  expect(isArrayEmpty([1, 2, 3])).toBe(false);
});

test("isObjectHasProps should return true for non-empty objects", () => {
  expect(isObjectHasProps({ a: 1 })).toBe(true);
  expect(isObjectHasProps({})).toBe(false);
});

test("isBooleanTruthy should return true for truthy booleans", () => {
  expect(isBooleanTruthy(true)).toBe(true);
  expect(isBooleanTruthy(false)).toBe(false);
});

test("isBooleanFalsey should return true for falsey booleans", () => {
  expect(isBooleanFalsey(false)).toBe(true);
  expect(isBooleanFalsey(true)).toBe(false);
});

test("isHTML should return true for HTML strings", () => {
  expect(isHTML("<div></div>")).toBe(true);
  expect(isHTML("hello")).toBe(false);
});
