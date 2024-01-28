declare module "conditional-helpers" {
  export const isArray: (value: any) => boolean;
  export const isString: (value: any) => boolean;
  export const isFunction: (value: any) => boolean;
  export const isObject: (value: any) => boolean;
  export const hasLength: (arg: any) => boolean;
  export const isBoolean: (value: any) => boolean;
  export const isDate: (value: any) => boolean;
  export const isNumber: (value: any) => boolean;
  export const isObjectEmpty: (value: any) => boolean;
  export const isStringHasLength: (value: any) => boolean;
  export const isStringEmpty: (value: any) => boolean;
  export const isArrayHasLength: (value: any) => boolean;
  export const isArrayEmpty: (value: any) => boolean;
  export const isObjectHasProps: (value: any) => boolean;
  export const isBooleanTruthy: (value: any) => boolean;
  export const isBooleanFalsey: (value: any) => boolean;
  export const isHTML: (value: any) => boolean;
}
