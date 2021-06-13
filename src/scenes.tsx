import { Action, Scene } from './types';
import json from './scenes.json';

/*
 * This is extremely tedious; we'll delete it once we integrate with json-schema
 */

type ScenesById = { [ name: string]: Scene };

const importScenes: () => ScenesById = () => {
  const scenesById: ScenesById = {};
  json.forEach(obj => {
    const room = _validateScene(obj);
    const { id } = room;
    scenesById[id] = room;
  });
  _validateRefIntegrity(scenesById);
  return scenesById;
}

const _validateScene = (scene: any): Scene => {
  _checkState(_isObject(scene), scene);
  _checkState(scene.hasOwnProperty('id') && typeof scene.id === 'string', scene);
  _checkState(scene.hasOwnProperty('name') && typeof scene.name === 'string', scene);
  if (scene.hasOwnProperty('description')) {
    _checkState(typeof scene.description === 'string', scene);
  }
  _checkState(scene.hasOwnProperty('actions') && Array.isArray(scene.actions), scene);
  const actions = scene.actions.map((action: any) => _validateAction(action));

  return {
    ...scene,
    actions
  };
};

const _validateAction = (action: any): Action => {
  _checkState(action.hasOwnProperty('text') && typeof action.text === 'string', action);
  if (action.hasOwnProperty('scene')) {
    _checkState(typeof action.scene === 'string', action);
  }
  if (action.hasOwnProperty('requires')) {
    _checkState(_isObject(action.requires), action);
    if (action.requires.hasOwnProperty('items')) {
      _checkState(Array.isArray(action.requires.items), action);
      action.requires.items.forEach((i: any) => _checkState(typeof i === 'string', action));
    }
  }
  if (action.hasOwnProperty('forbids')) {
    _checkState(_isObject(action.forbids), action);
    if (action.forbids.hasOwnProperty('items')) {
      _checkState(Array.isArray(action.forbids.items), action);
      action.forbids.items.forEach((i: any) => _checkState(typeof i === 'string', action));
    }
  }
  if (action.hasOwnProperty('adds')) {
    _checkState(_isObject(action.adds), action);
    if (action.adds.hasOwnProperty('items')) {
      _checkState(Array.isArray(action.adds.items), action);
      action.adds.items.forEach((i: any) => _checkState(typeof i === 'string', action));
    }
  }
  if (action.hasOwnProperty('removes')) {
    _checkState(_isObject(action.removes), action);
    if (action.removes.hasOwnProperty('items')) {
      _checkState(Array.isArray(action.removes.items), action);
      action.removes.items.forEach((i: any) => _checkState(typeof i === 'string', action));
    }
  }
  return action as Action;
};

/**
 * Validate that all references to scene ids are valid
 */
const _validateRefIntegrity = (scenes: ScenesById) => {
  Object.values(scenes).forEach(room => {
    room.actions.forEach(action => {
      if (action.scene) {
        _checkState(scenes[action.scene] != null, action);
      }
    });
  });
}

/**
 * @param obj The contents of the object being checked, for logging purposes
 */
const _checkState = (condition: boolean, obj: any): void => {
  if (!condition) {
    throw new Error("Invalid definition: " + JSON.stringify(obj));
  }
}

const _isObject = (o: object) => {
  return typeof o === 'object' && !Array.isArray(o);
}

export { importScenes };
export type { Scene, Action };
