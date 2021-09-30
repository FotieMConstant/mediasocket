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
  client.on('createRoom', (room, userJoining) => {
    client.join(room);
    console.log(`${userJoining} joined room => ${room}`);
    io.to(room).emit('createRoomStatus', `Only users in Room => ${room} can see this message`);
  });



});

server.listen(5000, () => {
  console.log('listening on port: 5000');
});
