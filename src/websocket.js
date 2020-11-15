import socketio from 'socket.io';
let connections = [];

let io;
export const setUpSocket = (server) => {
  io = socketio(server);
  io.on('connection', (socket) => {
    connections.push(socket.id);
  });
};

export const sendMessage = (message, data) => {
  connections.forEach((connection) => {
    io.to(connection).emit(message, data);
  });
};
