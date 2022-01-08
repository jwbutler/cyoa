import { ValidateFunction } from 'ajv';
import Ajv2020 from 'ajv/dist/2020';

const ajv = new Ajv2020();

const validators: { [path: string]: ValidateFunction<unknown> } = {};

/*
 * TODO: This doesn't work.  Need to figure out how to handle schema references.
 */
const validateSchema = (object: object, schemaFilename: string): Promise<boolean> => {
  let validator: ValidateFunction<unknown>;
  if (validators[schemaFilename]) {
    validator = validators[schemaFilename];
    return Promise.resolve(validator(object));
  } else {
    return import(`./schemas/${schemaFilename}`)
      .then(json => json.default)
      .then(schema => ajv.compile(schema))
      .then((validate: ValidateFunction) => {
        validators[schemaFilename] = validate;
        return validate(object);
      });
  }
};

/**
 * @param obj The contents of the object being checked, for logging purposes
 */
const assert = (condition: boolean, obj: any): void => {
  if (!condition) {
    throw new Error(`Invalid definition: ${JSON.stringify(obj)}`);
  }
};

const isObject = (o: object) => {
  return typeof o === 'object' && !Array.isArray(o);
};

const hasUnknownProperties = (o: object, properties: string[]) =>
  !Object.keys(o).every(k => properties.includes(k));

export {
  assert,
  hasUnknownProperties,
  isObject,
  validateSchema
};
