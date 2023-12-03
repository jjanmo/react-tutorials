import { ChangeEvent, FormEvent, useState } from 'react';
import * as S from './ChatRoom.styled';
import useWebSocket from '../hooks/useWebSocket';

export default function ChatRoom() {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const { webSocket } = useWebSocket({ setMessages });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMessageInput(value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (messageInput.trim() !== '' && webSocket) {
      setMessages([...messages, messageInput]);
      webSocket.send(messageInput);
      setMessageInput('');
    }
  };

  return (
    <S.Container>
      <S.ChatContainer>
        <S.Messages>
          {messages.map((message, index) => (
            <S.Message key={index}>{message}</S.Message>
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
