import { deserialize, GameState, serialize } from './GameState';

const { localStorage } = window;

const load = (): (GameState | null) => {
  const serialized = localStorage.getItem('save');
  if (serialized) {
    try {
      return deserialize(serialized) as GameState;
    } catch (e) {
      console.log(e);
    }
  }
  return null;
}

const save = (state: GameState) => {
  window.localStorage.setItem('save', serialize(state));
}

const exists = () => !!localStorage.getItem('save');

export {
  load,
  save,
  exists
};
