const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());

io.on('connection', (client) => {
  console.log(`Connected => ${client.id}`);
  // client.on('event', data => { /* … */ });
  // When client disconnects
  client.on('disconnect', () => {
    console.log(`Disconnected => ${client.id}`);
  });
  //  create or join a room event from frontend
  client.on('createRoom', (room) => {
    client.join(room);
    console.log(`New user joined room => ${room}`);
    io.to(room).emit('createRoomStatus', `Only users in Room => ${room} can see this message`);
  });

    // function to listen to play and emit events in room
    client.on('play', (room) => {
      console.log(`play video on all devices in room => ${room}`);
      io.to(room).emit('playing', `Playing video in Room => ${room}`);
    });

    // function to listen to pause and emit events in room
    client.on('paused', (room) => {
      console.log(`paused video on all devices in room => ${room}`);
      io.to(room).emit('paused', `Paused video in Room => ${room}`);
    });


});

server.listen(5000, () => {
  console.log('listening on port: 5000');
});
