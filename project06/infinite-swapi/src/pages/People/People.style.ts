import styled from 'styled-components';

export const Container = styled.ul``;

export const CardContainer = styled.li`
  width: 80%;
  padding: 0.5rem;
  margin: auto;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 60% 40%;

  background-color: #273c75;
  color: white;
  list-style: none;

  & + & {
    margin-top: 1rem;
  }
`;
export const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 20px;
`;
export const Info = styled.div``;
export const Height = styled.div``;
export const Hair = styled.div``;
export const Gender = styled.div``;

export const Loader = styled.div`
  padding-bottom: 2rem;
  margin-top: 1rem;
  font-size: 20px;
  text-align: center;

  &.more {
    color: tomato;
    font-weight: 700;
  }
  &.nothing {
    color: dodgerblue;
    font-weight: 600;
  }
`;
