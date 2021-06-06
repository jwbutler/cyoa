import json from './rooms.json';

interface Room {
  id: string,
  name: string,
  description?: string,
  actions: Action[]
}

type Action = {
  ref?: string,
  text: string
}

const importRooms: () => { [name: string]: Room } = () => {
  const roomsById: { [name: string]: Room } = {};
  json.forEach(obj => {
    const room = _validateRoom(obj);
    const { id } = room;
    roomsById[id] = room;
  });
  _validateRefIntegrity(roomsById);
  return roomsById;
}

const _validateRoom = (room: any): Room => {
  _checkState(typeof room === 'object' && !Array.isArray(room), room);
  _checkState(room.hasOwnProperty('id') && typeof room.id === 'string', room);
  _checkState(room.hasOwnProperty('name') && typeof room.name === 'string', room);
  if (room.hasOwnProperty('description')) {
    _checkState(typeof room.description === 'string', room);
  }
  _checkState(room.hasOwnProperty('actions') && Array.isArray(room.actions), room);
  const actions = room.actions.map((action: any) => _validateAction(action));

  return {
    ...room,
    actions
  };
};

const _validateAction = (action: any): Action => {
  _checkState(action.hasOwnProperty('text') && typeof action.text === 'string', action);
  if (action.hasOwnProperty('ref')) {
    _checkState(typeof action.ref === 'string', action);
  }
  return action as Action;
};

/**
 * Validate that all references to room ids are valid
 */
const _validateRefIntegrity = (rooms: { [id: string]: Room }) => {
  Object.values(rooms).forEach(room => {
    room.actions.forEach(action => {
      if (action.ref) {
        _checkState(rooms[action.ref] != null, action);
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

export { importRooms };
export type { Room, Action };
