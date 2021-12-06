import type Controller from './Controller';
import { assert, hasUnknownProperties, isObject } from './validation';
import Action from './Action';

type Condition = {
  readonly requires?: {
    readonly items?: ReadonlyArray<string>,
    readonly visited?: ReadonlyArray<string>
  },
  readonly forbids?: {
    readonly items?: ReadonlyArray<string>,
    readonly visited?: ReadonlyArray<string>
  },
  readonly actions?: ReadonlyArray<Action>,
  readonly description?: string
};

namespace Condition {
  export const validate = (condition: any): Condition => {
    if (condition.hasOwnProperty('requires')) {
      assert(isObject(condition.requires), condition);
      if (condition.requires.hasOwnProperty('items')) {
        assert(Array.isArray(condition.requires.items), condition);
        for (const item of condition.requires.items) {
          assert(typeof item === 'string', condition);
        }
      }
      if (condition.requires.hasOwnProperty('visited')) {
        assert(Array.isArray(condition.requires.visited), condition);
        for (const sceneId of condition.requires.visited) {
          assert(typeof sceneId === 'string', condition);
        }
      }
      assert(!hasUnknownProperties(condition.requires, ['items', 'visited']), condition);
    }

    if (condition.hasOwnProperty('forbids')) {
      assert(isObject(condition.forbids), condition);
      if (condition.forbids.hasOwnProperty('items')) {
        assert(Array.isArray(condition.forbids.items), condition);
        for (const item of condition.forbids.items) {
          assert(typeof item === 'string', condition);
        }
      }
      if (condition.forbids.hasOwnProperty('visited')) {
        assert(Array.isArray(condition.forbids.visited), condition);
        for (const sceneId of condition.forbids.visited) {
          assert(typeof sceneId === 'string', condition);
        }
      }
      assert(!hasUnknownProperties(condition.forbids, ['items', 'visited']), condition);
    }

    if (condition.hasOwnProperty('description')) {
      assert(typeof condition.description === 'string', condition);
    }

    if (condition.hasOwnProperty('actions')) {
      assert(Array.isArray(condition.actions), condition);
      for (const action of condition.actions) {
        Action.validate(action);
      }
    }

    assert(!hasUnknownProperties(condition, ['requires', 'forbids', 'actions', 'description']), condition);

    return condition as Condition;
  };

  export const evaluate = (condition: Condition, { inventory, visited }: Controller) => {
    if (condition.requires) {
      if (condition.requires.items) {
        if (!condition.requires.items.every(item => inventory.includes(item))) {
          return false;
        }
      }
      if (condition.requires.visited) {
        if (!condition.requires.visited.every(scene => visited.includes(scene))) {
          return false;
        }
      }
    }
    if (condition.forbids) {
      if (condition.forbids.items) {
        if (condition.forbids.items.find(item => inventory.includes(item))) {
          return false;
        }
      }
      if (condition.forbids.visited) {
        if (condition.forbids.visited.find(scene => visited.includes(scene))) {
          return false;
        }
      }
    }
    return true;
  };
}

export default Condition;
