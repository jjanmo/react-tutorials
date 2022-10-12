import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
`;
export const Left = styled.section`
  width: 49%;
`;
export const Right = styled.section`
  width: 49%;
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

export const Line = styled.hr`
  margin: 1rem 0;
`;
export const PostList = styled.ul`
  padding: 2rem 0;
  background-color: #f7f1e3;
`;
export const PostItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }

  &:hover {
    background-color: #eee;
  }
  &::before {
    content: '◾️';
    margin-right: 10px;
    transform: scale(0.8);
  }
`;
