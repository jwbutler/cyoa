/**
 * @param obj The contents of the object being checked, for logging purposes
 */
const assert = (condition: boolean, obj: any): void => {
  if (!condition) {
    throw new Error("Invalid definition: " + JSON.stringify(obj));
  }
}

const isObject = (o: object) => {
  return typeof o === 'object' && !Array.isArray(o);
}

const hasUnknownProperties = (o: object, properties: string[]) =>
  !Object.keys(o).every(k => properties.includes(k));

export {
  assert,
  hasUnknownProperties,
  isObject
};
