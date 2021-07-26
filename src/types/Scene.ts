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

const validateScenes = (json: any[]): Scene[] => {
  const scenesById: { [ id: string]: Scene } = {};
  json.forEach(obj => {
    const scene = Scene.validate(obj);
    const { id } = scene;
    scenesById[id] = scene;
  });
  validateReferences(scenesById);
  // @ts-ignore
  return Object.values(scenesById).sort((a, b) => b.id - a.id);
};

/**
 * Validate that all references to scene names are valid
 */
const validateReferences = (scenes: { [ id: string]: Scene }) => {
  Object.values(scenes).forEach(room => {
    const actions: Action[] = [];
    room.actions?.forEach(action => actions.push(action));
    room.conditions?.forEach(condition =>
      condition?.actions?.forEach(action => actions.push(action))
    );
    actions.forEach(action => {
      if (action.scene) {
        assert(scenes[action.scene] != null, action);
      }
    });
  });
};

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
      scene.actions.forEach((action: any) => actions.push(Action.validate(action)));

    }

    const conditions: Condition[] = [];
    if (scene.hasOwnProperty('conditions')) {
      assert(Array.isArray(scene.conditions), scene);
      scene.conditions.forEach((condition: any) => conditions.push(Condition.validate(condition)));
    }

    assert(!hasUnknownProperties(scene, ['id', 'name', 'description', 'actions', 'conditions']), scene);

    return {
      ...scene,
      actions,
      conditions
    };
  };
}

export default Scene;
export { validateScenes };
