import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledBox } from '../../types/ticker';

export const Coin = styled.li`
  width: 100%;
  margin: 20px 0;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    background-color: ${(props) => props.theme.activeColor};
  }
`;
export const SLink = styled(Link)`
  padding: 1.2rem 2rem;

  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  column-gap: 1rem;
`;

export const Name = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
  line-height: 20px;
  padding-left: 1rem;

  & > div:first-child {
    font-weight: bold;
    font-size: 20px;
    margin-right: 0.5rem;
  }
  & > div:nth-child(2) {
    font-size: 14px;
    color: #636e72;
    transform: translateY(2px);
  }
`;
export const Price = styled.div`
  grid-column: 2;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Change = styled.div<{ bgColor: string }>`
  grid-column: 3;

  & > div {
    width: 80%;
    padding: 10px;
    margin: auto;
    background-color: ${(props) => props.bgColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;

export const Volume = styled.div``;
