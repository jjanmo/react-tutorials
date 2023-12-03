import { useCallback, useEffect, useState } from 'react';

interface Props {
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}

const WS_URL = 'ws://localhost:4000';

export default function useWebSocket({ setMessages }: Props) {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  const getConnection = useCallback(() => {
    const webSocket = new WebSocket(WS_URL);

    return {
      webSocket,
      [Symbol.dispose]: () => {
        webSocket.close();
        console.log('웹소켓 닫힘 🎬');
      },
    };
  },[]);

  useEffect(() => {
    using webSocketHandler = getConnection()
    setWebSocket(webSocketHandler.webSocket)

    return () => {
      console.log('unmounted')
    }
  }, [getConnection])

  useEffect(() => {
    if (!webSocket) return;

    webSocket.onopen = () => {
      console.log('웹소켓 연결 🎉');
    };

    webSocket.onmessage = async (event) => {
      const receivedMessage = await event.data.text();
      setMessages((prev) => [...prev, receivedMessage]);
    };
  }, [webSocket, setMessages]);

  return {
    webSocket,
    setWebSocket,
  };
}
