import app from './app';
import http from 'http';
import { setUpSocket } from './websocket';

const PORT = 8000;
const server = http.Server(app);
setUpSocket(server);
server.listen(PORT);
