import { Consumer } from './types';
import { GameState } from './GameState';
import { ReactElement } from 'react';
import { save as saveFile } from './saveFile';

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

/**
 * Core state management class which encapsulates the result of various {@link React#useState} hooks.
 * This is passed from the parent component ({@link App}) to its children, rather than passing individual
 * state elements and callback functions.
 *
 * I'm experimenting with ways to initialize this "class" concisely, without a lot of repeated definitions.
 * The result looks a little strange.
 */
interface Controller extends Props {
  readonly currentState: GameState;
  readonly load: Consumer<GameState>;
  readonly restart: () => void;
  readonly save: () => void;
}

namespace Controller {
  export const create = (props: Props) => {
    const currentState = {
      sceneId: props.sceneId,
      inventory: props.inventory
    };

    const load = ({ sceneId, inventory }: GameState) => {
      const { setSceneId, setInventory } = props;
      setSceneId(sceneId);
      setInventory(inventory);
    };

    const restart = () => load(props.initialState);

    const save = () => {
      const { setSavedGame } = props;
      saveFile(currentState);
      setSavedGame(currentState);
    }

    return {
      ...props,
      currentState,
      load,
      restart,
      save,
    };
  };
}

export default Controller;
