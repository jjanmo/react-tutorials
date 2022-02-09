import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  all: unset;
  width: 100px;
  padding: 10px;
  margin: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
`;
