import styled from 'styled-components';

export const InfoContainer = styled.div`
  margin: 20px 0;
`;
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

export const LinkContainer = styled.div`
  font-size: 1rem;
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > a:hover {
    color: #686de0;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px 0;
  & > div:nth-child(2) {
    font-weight: bold;
  }
`;

export const DescContainer = styled.div`
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px 0;
  & > div:first-child {
    margin-bottom: 10px;
  }
  & > div:nth-child(2) {
    font-size: 1rem;
    line-height: 22px;
  }
`;
