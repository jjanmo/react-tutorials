import { Link } from 'react-router-dom';
import COLOR from 'style/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 6rem;
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

export const LogoutBtn = styled.button`
  position: relative;
  padding: 0.8rem 4rem;
  border-radius: 0.2rem;

  outline: none;
  border: none;

  background-color: ${COLOR.PRIMARY_060};
  color: ${COLOR.WHITE};

  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0%;
    height: 100%;
    background-color: ${COLOR.PRIMARY_070};
    transition: all 0.5s ease;
    transform-origin: center;
    opacity: 0.6;
  }

  &:hover:before {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & a:hover {
    color: ${COLOR.PRIMARY_070};
  }
`;
