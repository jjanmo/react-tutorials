import styled from 'styled-components';

export const LogoContainer = styled.div`
  width: fit-content;
  margin: auto;
  display: flex;
  align-items: center;

  & img {
    width: 50px;
    margin-right: 20px;
  }
  & div:nth-of-type(1) {
    font-size: 40px;
    margin-right: 5px;
    align-self: center;
  }
  & div:nth-of-type(2) {
    font-size: 30px;
    color: #636e72;
    align-self: center;
    margin-top: 6px;
  }
`;

export const Loading = styled.div`
  width: 100%;
  padding: 1em 0;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;
