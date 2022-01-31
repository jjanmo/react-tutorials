import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledBox } from '../../interfaces';

export const SCoin = styled.li`
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
  padding: 12px 20px;
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoBox = styled(Box)`
  width: 20%;
`;
export const NameBox = styled(Box)`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 20px;
  padding-left: 1rem;
  & > div:first-child {
    font-weight: bold;
    font-size: 16px;
  }
  & > div:nth-child(2) {
    font-size: 12px;
    color: #636e72;
  }
`;
export const NumberBox = styled(Box)`
  width: 25%;
  padding-right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ChangeBox = styled(Box)<StyledBox>`
  width: 25%;
  & > div {
    width: 70%;
    padding: 10px;
    background-color: ${(props) => props.bgColor};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`;

export const Logo = styled.img`
  width: 40px;
`;
