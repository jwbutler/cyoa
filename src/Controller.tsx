import { GameState } from './GameState';

/**
 * Core state management class which encapsulates the result of various {@link React#useState} hooks.
 * This is passed from the parent component ({@link App}) to its children, rather than passing individual
 * state elements and callback functions.
 */
interface Props {
  readonly initialState: GameState,
  readonly sceneId: string,
  readonly inventory: string[],
  readonly setSceneId: (sceneId: string) => void,
  readonly setInventory: (inventory: string[]) => void
}

class Controller implements Props {
  readonly initialState: GameState;
  readonly sceneId: string;
  readonly inventory: string[];
  readonly setSceneId: (sceneId: string) => void;
  readonly setInventory: (inventory: string[]) => void;

  constructor({ initialState, sceneId, inventory, setSceneId, setInventory }: Props) {
    this.initialState = initialState;
    this.sceneId = sceneId;
    this.inventory = inventory;
    this.setSceneId = setSceneId;
    this.setInventory = setInventory;
  }

  load({ sceneId, inventory }: GameState) {
    this.setSceneId(sceneId);
    this.setInventory(inventory);
  };

  restart() {
    this.load(this.initialState);
  }
}

export default Controller;
