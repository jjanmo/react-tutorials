import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 50vh;
`;
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  background-color: #eee;
`;
export const Messages = styled.ul`
  list-style: none;
  height: 100%;
  padding: 10px 20px;
`;
export const Message = styled.li`
  margin: 5px 0;
`;

export const InputContainer = styled.form`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  margin-top: 10px;
`;
export const Input = styled.input`
  flex: 1;
`;
export const Button = styled.button``;
