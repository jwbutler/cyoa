type GameState = {
  sceneId: string,
  inventory: string[]
};

const serialize = (state: GameState) => btoa(JSON.stringify(state));
const deserialize = (value: string) => JSON.parse(atob(value)) as GameState;

export type {
  GameState
};

export {
  deserialize,
  serialize
}
