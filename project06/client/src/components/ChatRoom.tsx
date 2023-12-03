import { useState } from 'react';
import * as S from './ChatRoom.styled';

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleClick = () => {};

  return (
    <S.Container>
      <S.ChatContainer>
        <S.Messages>
          {messages.map((message, index) => (
            <S.Message key={index}>{message}</S.Message>
          ))}
        </S.Messages>
        <S.InputContainer>
          <S.Input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <S.Button onClick={handleClick}>Send</S.Button>
        </S.InputContainer>
      </S.ChatContainer>
    </S.Container>
  );
}
