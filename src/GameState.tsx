type GameState = {
  sceneId: string,
  inventory: string[]
};

/**
 * Serialize the contents of {@link GameState} to JSON, and then base-64 encode the result.
 */
const serialize = (state: GameState) => btoa(JSON.stringify(state));

/**
 * Decode the specified base64 string that represents a {@link GameState} object, and then parse it as JSON.
 * TODO: Validate the result using json-schema
 */
const deserialize = (value: string) => JSON.parse(atob(value)) as GameState;

const equals = (first: GameState | null, second: GameState | null) => JSON.stringify(first) === JSON.stringify(second);

export type {
  GameState
};

export {
  deserialize,
  serialize,
  equals
}
