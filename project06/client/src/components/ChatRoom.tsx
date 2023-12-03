import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './ChatRoom.styled';
import useWebSocket from '../hooks/useWebSocket';

export type Message = {
  text: string;
  timestamp: string;
};

export default function ChatRoom() {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const { webSocket } = useWebSocket({ setMessages });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessageInput(value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (messageInput.trim() !== '' && webSocket) {
      const message: Message = {
        text: messageInput,
        timestamp: new Date().toISOString(),
      };
      webSocket.send(JSON.stringify(message));
      setMessageInput('');
    }
  };

  return (
    <S.Container>
      <S.ChatContainer>
        <S.Messages>
          {messages.map((message, index) => (
            <S.Message key={index}>{message.text}</S.Message>
          ))}
        </S.Messages>

        <S.InputContainer>
          <S.Input type="text" placeholder="Type your message..." value={messageInput} onChange={handleChange} />
          <S.Button type="submit" onClick={handleSubmit}>
            Send
          </S.Button>
        </S.InputContainer>
      </S.ChatContainer>
    </S.Container>
  );
}
