import COLOR from 'style/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  margin: 1rem 0;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2rem;

  color: ${COLOR.WHITE};
  background-color: ${COLOR.PRIMARY_040};
`;

export const LinkWrapper = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & a:hover {
    color: ${COLOR.PRIMARY_070};
  }
`;
