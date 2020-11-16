import socketio from 'socket.io';
import database from './database/index';

let io;
export const setUpSocket = (server) => {
  io = socketio(server);

  io.on('connection', async (socket) => {
    const { idCompany } = socket.handshake.query;

    const newConnection = {
      id: socket.id,
      idCompany: Number(idCompany),
    };
    saveConnection(newConnection);

    socket.on('disconnect', () => {
      console.log('disconnect connection ' + socket.id);
      removeConnection(socket.id);
    });
  });
};

export const findConnections = async (idCompany) => {
  const activeConnections = await getRedisByKey('connections');
  return activeConnections.filter(
    (connection) => connection.idCompany === idCompany
  );
};

export const sendMessage = (message, clientsToUpdate, data) => {
  clientsToUpdate.forEach((connection) => {
    io.to(connection.id).emit(message, data);
  });
};

const saveConnection = async (newConnection) => {
  try {
    const activeConnections = await getRedisByKey('connections');
    const newConnections = [...activeConnections, newConnection];

    setRedisByKey('connections', newConnections);
  } catch (error) {
    console.log(error);
  }
};
const removeConnection = async (connectionToRemove) => {
  try {
    const activeConnections = await getRedisByKey('connections');
    const newConnections = activeConnections.filter(
      (connection) => connection.id !== connectionToRemove
    );
    setRedisByKey('connections', newConnections);
  } catch (error) {
    console.log(error);
  }
};

const getRedisByKey = (key) => {
  return new Promise((resolve, reject) => {
    database.redisClient.get(key, (err, reply) => {
      if (err) {
        reject(err);
      }
      if (reply) {
        resolve(JSON.parse(reply));
      }
    });
  });
};

const setRedisByKey = (key, data) => {
  database.redisClient.set(key, JSON.stringify(data), (err, reply) => {
    if (reply === 'OK') console.log(key, 'set to redis');
  });
};
