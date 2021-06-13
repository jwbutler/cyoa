import { deserialize, GameState, serialize } from './GameState';

const { localStorage } = window;

const load = (): (GameState | null) => {
  const serialized = localStorage.getItem('save');
  if (serialized) {
    try {
      return deserialize(serialized) as GameState;
    } catch (e) {
      alert('Failed to load save file');
      console.log(e);
    }
  } else {
    // Maybe they manually cleared localStorage
    alert('No save file found');
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
