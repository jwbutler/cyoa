import json from '../data/scenes.json';

import Action from './Action';
import Condition from './Condition';
import { assert, hasUnknownProperties, isObject } from './validation';

type Scene = {
  readonly id: string,
  readonly name: string,
  readonly description?: string,
  readonly actions?: ReadonlyArray<Action>,
  readonly conditions?: ReadonlyArray<Condition>
}

const importScenes: () => Scene[] = () => {
  const scenesById: Record<string, Scene> = {};
  for (const obj of json) {
    const scene = Scene.validate(obj);
    const { id } = scene;
    scenesById[id] = scene;
  }
  validateReferences(scenesById);
  return Object.values(scenesById);
};

/**
 * Validate that all references to scene names are valid
 */
const validateReferences = (scenes: Record<string, Scene>) => {
  for (const room of Object.values(scenes)) {
    const actions: Action[] = [];
    for (const action of room.actions || []) {
      actions.push(action);
    }

    for (const condition of room.conditions || []) {
      for (const action of condition?.actions || []) {
        actions.push(action);
      }
    }

    for (const action of actions) {
      if (action.scene) {
        assert(scenes[action.scene] != null, action);
      }
    }
  }
};

/**
 * Perform the following substitutions on the description:
 *   1. Replace newlines with <br />
 *   2. Replace links in the form [text](link) with appropriate hyperlinks
 */
const parseDescription = (description: string) => description
    .replace(/\[(.*)\]\((.*)\)/g, (match, p1, p2) => `<a href="#${p2}">${p1}</a>`)
    .split('\n')
    .join('<br/>');

namespace Scene {
  export const validate = (scene: any): Scene => {
    assert(isObject(scene), scene);
    assert(scene.hasOwnProperty('id') && typeof scene.id === 'string', scene);
    assert(scene.hasOwnProperty('name') && typeof scene.name === 'string', scene);

    if (scene.hasOwnProperty('description')) {
      assert(typeof scene.description === 'string', scene);
    }

    const actions: Action[] = [];
    if (scene.hasOwnProperty('actions')) {
      assert(Array.isArray(scene.actions), scene);
      for (const action of scene.actions) {
        actions.push(Action.validate(action));
      }
    }

    const conditions: Condition[] = [];
    if (scene.hasOwnProperty('conditions')) {
      assert(Array.isArray(scene.conditions), scene);
      for (const condition of scene.conditions) {
        conditions.push(Condition.validate(condition));
      }
    }

    assert(!hasUnknownProperties(scene, ['id', 'name', 'description', 'actions', 'conditions']), scene);
    console.log(scene.description);

    return {
      ...scene,
      description: scene.description ? parseDescription(scene.description) : undefined,
      actions,
      conditions
    };
  };
}

export default Scene;
export { importScenes };
