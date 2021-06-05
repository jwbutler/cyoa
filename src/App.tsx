import React, { useState } from 'react';
import './App.css';
import { importRooms } from './Rooms';

const roomsById = importRooms();
const STARTING_ROOM_ID = 'outside_front_door';

const App = () => {
  const [roomId, setRoomId] = useState(STARTING_ROOM_ID);
  const room = roomsById[roomId];

  return (
    <div className="app">
      <h1>{room.name}</h1>
      <div className="description">
        {room.description}
      </div>
      {room.actions.map(action => (
        <div
          key={action.ref}
          className="action"
          onClick={() => action.ref && setRoomId(action.ref)}>
          {action.text}
        </div>
      ))}
    </div>
  );
}

export default App;
