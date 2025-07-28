import styled from 'styled-components';

export const Container = styled.div`
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
  padding: 15px 10px;

  & > div:nth-child(2) {
    font-weight: bold;
  }
  & + & {
    margin-top: 5px;
  }

  &:hover {
    background-color: #eee;
  }
`;

export const DescContainer = styled.div`
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px 0;
  & > div:first-child {
    margin-bottom: 10px;
  }
  & > div:last-child {
    font-size: 1rem;
    line-height: 22px;
  }
  &:hover {
    background-color: #eee;
  }
`;
