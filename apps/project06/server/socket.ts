import { IncomingMessage, Server } from 'http';
import { WebSocket } from 'ws';
import { v4 } from 'uuid';

const clients = new Map<string, WebSocket>();

export default (server: Server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket & { interval: NodeJS.Timeout }, req: IncomingMessage) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const clientId = v4();
    clients.set(clientId, ws);

    console.log(`새로운 클라이언트 접속 ip :${ip} id : ${clientId}`);

    ws.on('message', (message: string) => {
      clients.forEach((socket, id) => {
        if (id !== clientId) socket.send(message);
      });
    });

    ws.on('error', (error) => {
      console.log(`${error}`);
    });

    ws.on('close', () => {
      console.log(`클라이언트 접속 해제: ${ip}`);
      clearInterval(ws.interval);
    });
  });
};
