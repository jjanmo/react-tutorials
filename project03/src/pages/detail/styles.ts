import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 50px;
    margin-right: 10px;
  }
  & > div:nth-child(2) {
    height: 50px;
    font-size: 45px;
    display: flex;
    align-items: flex-end;
    margin-right: 10px;
  }
  & > div:nth-child(3) {
    height: 50px;
    font-size: 30px;
    color: #636e72;
    display: flex;
    align-items: flex-end;
  }
`;
