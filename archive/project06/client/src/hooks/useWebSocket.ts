import { useEffect, useState } from 'react';

interface Props {
  setMessages: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function useWebSocket({ setMessages }: Props) {
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:4000');
    setWebSocket(webSocket);
  }, []);

  useEffect(() => {
    if (!webSocket) return;

    webSocket.onopen = () => {
      console.log('웹소켓 연결 🎉');
    };

    webSocket.onmessage = async (event) => {
      const receivedMessage = await event.data.text();
      setMessages((prev) => [...prev, receivedMessage]);
    };

    return () => {
      webSocket.onclose = () => {
        console.log('웹소켓 닫힘 🎬');
      };
    };
  }, [webSocket, setMessages]);

  return {
    webSocket,
  };
}
