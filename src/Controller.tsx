import { GameState } from './GameState';
import { ReactElement } from 'react';
import { Consumer } from './types';
import { save as saveFile } from './saveFile';

/**
 * Core state management class which encapsulates the result of various {@link React#useState} hooks.
 * This is passed from the parent component ({@link App}) to its children, rather than passing individual
 * state elements and callback functions.
 */
interface Props {
  readonly initialState: GameState,
  readonly sceneId: string,
  readonly inventory: string[],
  readonly setSceneId: Consumer<string>,
  readonly setInventory: Consumer<string[]>,
  readonly lightbox: ReactElement | null,
  readonly setLightbox: Consumer<ReactElement | null>,
  readonly savedGame: GameState | null,
  readonly setSavedGame: Consumer<GameState | null>,
}

class Controller implements Props {
  readonly initialState: GameState;
  readonly sceneId: string;
  readonly inventory: string[];
  readonly setSceneId: Consumer<string>;
  readonly setInventory: Consumer<string[]>;
  readonly lightbox: ReactElement | null;
  readonly setLightbox: Consumer<ReactElement | null>;
  readonly savedGame: GameState | null;
  readonly setSavedGame: Consumer<GameState | null>;

  constructor({
    initialState,
    sceneId, setSceneId,
    inventory, setInventory,
    lightbox, setLightbox,
    savedGame, setSavedGame
  }: Props) {
    this.initialState = initialState;
    this.sceneId = sceneId;
    this.setSceneId = setSceneId;
    this.inventory = inventory;
    this.setInventory = setInventory;
    this.lightbox = lightbox;
    this.setLightbox = setLightbox;
    this.savedGame = savedGame;
    this.setSavedGame = setSavedGame;
  }

  load({ sceneId, inventory }: GameState) {
    this.setSceneId(sceneId);
    this.setInventory(inventory);
  };

  restart() {
    this.load(this.initialState);
  }

  save() {
    const { sceneId, inventory, setSavedGame } = this;
    saveFile({ sceneId, inventory });
    setSavedGame({ sceneId, inventory });
  }
}

export default Controller;
