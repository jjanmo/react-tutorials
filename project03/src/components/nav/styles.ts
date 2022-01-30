import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
  border: 2px solid #c7ecee;
  & > * {
    width: calc(100% / 3);
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > a:first-child,
  & > a:nth-child(2) {
    border-right: 2px solid #c7ecee;
  }
`;
export const LinkText = styled.div<{ isActive: boolean }>`
  width: 50%;
  text-align: center;
  border-bottom: ${(props) => (props.isActive ? '3px solid #686de0' : '')};
  font-weight: ${(props) => (props.isActive ? 'bold' : '')};
  color: ${(props) => (props.isActive ? '#686de0' : props.theme.textColor)}; ;
`;
