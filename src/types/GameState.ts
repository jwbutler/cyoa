/**
 * Using some declaration merging tricks to create "static methods" on the type
 */
type GameState = {
  sceneId: string,
  inventory: string[]
};

namespace GameState {
  /**
   * Serialize the contents of {@link GameState} to JSON, and then base-64 encode the result.
   */
  export const serialize = (state: GameState) => btoa(JSON.stringify(state));

  /**
   * Decode the specified base64 string that represents a {@link GameState} object, and then parse it as JSON.
   * TODO: Validate the result using json-schema
   */
  export const deserialize = (value: string) => JSON.parse(atob(value)) as GameState;

  export const equals = (first: GameState | null, second: GameState | null) => JSON.stringify(first) === JSON.stringify(second);
}

export default GameState;
