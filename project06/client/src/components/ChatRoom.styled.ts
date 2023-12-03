import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ChatContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  background-color: #eee;
`;

export const Messages = styled.ul``;
export const Message = styled.li``;

export const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: red;
`;
export const Input = styled.input`
  flex: 1;
`;
export const Button = styled.button``;
