import styled from 'styled-components';

export const InfoContainer = styled.div`
  margin: 20px 0;
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
