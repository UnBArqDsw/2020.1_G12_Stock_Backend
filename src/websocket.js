import socketio from 'socket.io';
let connections = [];

let io;
export const setUpSocket = (server) => {
  io = socketio(server);
  io.on('connection', (socket) => {
    const { idCompany } = socket.handshake.query;
    connections.push({ id: socket.id, idCompany: Number(idCompany) });
  });
};

export const findConnections = (idCompany) => {
  return connections.filter((connection) => connection.idCompany === idCompany);
};

export const sendMessage = (message, clientsToUpdate, data) => {
  clientsToUpdate.forEach((connection) => {
    io.to(connection.id).emit(message, data);
  });
};
