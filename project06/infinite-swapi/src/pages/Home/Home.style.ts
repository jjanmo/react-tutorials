import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 50%;
  padding: 2rem 0;
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #2c3e50;
  color: white;
  border-radius: 10px;
`;

export const Button = styled.button`
  all: unset;
  border-radius: 10px;
  border: 2px solid #40739e;

  background-color: #40739e;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background-color: #273c75;
  }

  & + & {
    margin-left: 1rem;
  }

  & a {
    display: block;
    width: 15rem;
    padding: 0.6em 1em;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
  }
`;
