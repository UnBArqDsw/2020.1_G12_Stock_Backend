import socketio from 'socket.io';
let connections = [];

let io;
export const setUpSocket = (server) => {
  io = socketio(server);
  io.on('connection', (socket) => {
    console.log('new socket connected!', socket);
  });
};
