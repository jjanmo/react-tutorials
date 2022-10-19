import styled from 'styled-components';

export const PostContainer = styled.div`
  height: auto;
  padding: 2rem;
  font-size: 18px;
  background-color: #78e08f;

  & h3 {
    font-size: 24px;
  }
  & .control-buttons {
    width: 100%;
    text-align: right;
    margin-bottom: 10px;
  }
  & .user {
    width: 100%;
    text-align: right;
  }
`;

export const CommentContainer = styled.div`
  ul {
    padding: 0;
  }
`;

export const Comment = styled.li`
  position: relative;
  display: flex;
  list-style: none;

  & + & {
    margin-top: 1.5rem;
  }

  &::before {
    content: '💬';
    margin-right: 1rem;
  }
`;
export const Writer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 14px;
  color: #636e72;
`;
export const Text = styled.div`
  padding-bottom: 1.2rem;
`;

export const MessageWrapper = styled.div`
  text-align: right;
`;
export const Message = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const Form = styled.form<{ hidden: boolean }>`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  margin: 1rem 0;

  input {
    width: 100%;
    padding: 0.2rem;
  }
`;
