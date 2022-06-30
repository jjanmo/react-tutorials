import styled from 'styled-components';
import { INavItemProps } from '../../types/coin';

export const SNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid ${(props) => props.theme.borderColor};
  font-size: 20px;
  & > div {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    & > a {
      width: 100%;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > div:first-child,
  & > div:nth-child(2) {
    border-right: 2px solid ${(props) => props.theme.borderColor};
  }
`;
export const Item = styled.div<INavItemProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.activeColor : 'transparent'};
`;
export const LinkText = styled.div<{ isActive: boolean }>`
  width: 50%;
  text-align: center;
  border-bottom: ${(props) => (props.isActive ? '3px solid #686de0' : '')};
  font-weight: ${(props) => (props.isActive ? 'bold' : '')};
  color: ${(props) => (props.isActive ? '#686de0' : props.theme.textColor)}; ;
`;
