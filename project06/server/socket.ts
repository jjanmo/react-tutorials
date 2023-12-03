import { IncomingMessage, Server } from 'http';
import { WebSocket } from 'ws';

export default (server: Server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket & { interval: NodeJS.Timeout }, req: IncomingMessage) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    console.log(`새로운 클라이언트 접속: ${ip}`);

    ws.on('message', (message: string) => {
      console.log(`received message : ${message}`);
      ws.send(`server received message : ${message}`);
    });

    ws.on('error', (error) => {
      console.log(`${error}`);
    });

    ws.on('close', () => {
      console.log(`클라이언트 접속 해제: ${ip}`);
      clearInterval(ws.interval);
    });

    ws.interval = setInterval(() => {
      if (ws.readyState === ws.OPEN) {
        ws.send('핑 🚀');
      }
    }, 3000);
  });
};
