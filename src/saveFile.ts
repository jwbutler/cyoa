import GameState from './types/GameState';

const { deserialize, serialize } = GameState;
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
};

const save = (state: GameState) => localStorage.setItem('save', serialize(state));

const exists = () => !!localStorage.getItem('save');

export {
  load,
  save,
  exists
};
