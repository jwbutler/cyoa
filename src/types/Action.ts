import Controller from './Controller';
import { assert, hasUnknownProperties, isObject } from './validation';

namespace Action {
  export enum Type {
    SCENE = 'scene',
    ITEM = 'item',
    ACTION = 'action'
  }
}

type Action = {
  readonly text: string,
  readonly type: Action.Type,
  readonly scene: string,
  readonly adds?: {
    readonly items?: ReadonlyArray<string>
  },
  readonly removes?: {
    readonly items?: ReadonlyArray<string>
  }
};

namespace Action {
  export const validate = (action: any): Action => {
    assert(action.hasOwnProperty('text') && typeof action.text === 'string', action);
    if (action.hasOwnProperty('type')) {
      assert(Object.values(Action.Type).includes(action.type), action);
    }
    assert(action.hasOwnProperty('scene'), action);
    assert(typeof action.scene === 'string', action);

    if (action.hasOwnProperty('adds')) {
      assert(isObject(action.adds), action);
      if (action.adds.hasOwnProperty('items')) {
        assert(Array.isArray(action.adds.items), action);
        action.adds.items.forEach((i: any) => assert(typeof i === 'string', action));
      }
    }

    if (action.hasOwnProperty('removes')) {
      assert(isObject(action.removes), action);
      if (action.removes.hasOwnProperty('items')) {
        assert(Array.isArray(action.removes.items), action);
        action.removes.items.forEach((i: any) => assert(typeof i === 'string', action));
      }
    }

    assert(!hasUnknownProperties(action, ['text', 'type', 'scene', 'adds', 'removes']), action);

    return {
      ...action,
      type: action.type || Action.Type.SCENE
    };
  };

  export const execute = (action: Action, controller: Controller) => {
    const { adds, removes, scene } = action;
    const { inventory, setInventory, setSceneId } = controller;
    if (scene) {
      setSceneId(scene);
    }
    if (adds) {
      const { items } = adds;
      if (items) {
        // TODO: add distinct().  Doesn't matter since remove() will remove the duplicates
        const updatedInventory = [...inventory, ...items];
        setInventory(updatedInventory);
      }
    }
    if (removes) {
      const { items } = removes;
      if (items) {
        // TODO: add distinct()
        const updatedInventory = inventory.filter(item => items && !items.includes(item));
        setInventory(updatedInventory);
      }
    }
  };

  export const getKey = (action: Action) => btoa(JSON.stringify(action));

  export const sort = (actions: Action[]) => {
    const getPriority = (action: Action): number => {
      switch (action.type) {
        case Action.Type.ACTION: return 2;
        case Action.Type.ITEM:   return 1;
        case Action.Type.SCENE:  return 0;
      }
    };

    actions.sort((a, b) => getPriority(b) - getPriority(a));
  };
}

export default Action;
