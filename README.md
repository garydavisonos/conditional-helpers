# Conditional Helpers

A collection of JavaScript helper functions to be used in conditional logic within projects.

![Code Quality](https://github.com/garydavisonos/conditional-helpers/actions/workflows/code.quality.yml/badge.svg)
![Publish to npm](https://github.com/garydavisonos/conditional-helpers/actions/workflows/publish.yml/badge.svg)
![Version](https://img.shields.io/npm/v/conditional-helpers)
![ESLint](https://img.shields.io/badge/code%20style-eslint-brightgreen)
![TypeScript](https://img.shields.io/badge/language-typescript-blue)



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [License](#license)

## Installation

To install the `conditional-helpers` package, run the following command in your terminal:

```bash
npm install conditional-helpers
```

## Usage

Import the conditional-helpers package in your JavaScript file and use the helper functions as needed. For example:

```js
import { isString, isNumber, isArray } from "conditional-helpers";

console.log(isString("hello")); // true
console.log(isNumber(42)); // true
console.log(isArray([1, 2, 3])); // true
```

## Functions

The following helper functions are available in the conditional-helpers package:

- isArray: Checks if a value is an array.
- isBoolean: Checks if a value is a boolean.
- isBooleanFalsey: Checks if a boolean value is falsey.
- isBooleanTruthy: Checks if a boolean value is truthy.
- isDate: Checks if a value is a date.
- isFunction: Checks if a value is a function.
- isHTML: Checks if a value is an HTML string.
- isNumber: Checks if a value is a number.
- isObject: Checks if a value is an object.
- isObjectEmpty: Checks if an object is empty.
- isObjectHasProps: Checks if an object has properties.
- isString: Checks if a value is a string.
- isStringEmpty: Checks if a string is empty.
- isStringHasLength: Checks if a string has length.
- isArrayEmpty: Checks if an array is empty.
- isArrayHasLength: Checks if an array has length.
- hasLength: Checks if a value has length.

## License

The conditional-helpers package is licensed under the ISC license.
