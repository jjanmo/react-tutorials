import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    margin: 0 1rem;
    cursor: pointer;
  }
`;
export const PostList = styled.ul`
  padding: 2rem 0;
  list-style: none;
`;

export const PostItem = styled.li`
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;

  & + & {
    margin-top: 10px;
  }

  &:hover {
    background-color: #eee;
  }
`;
