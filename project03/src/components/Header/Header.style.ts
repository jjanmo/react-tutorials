import COLOR from '@style/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  margin: 1rem 0;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 2rem;

  color: ${COLOR.WHITE};
  background-color: ${COLOR.PRIMARY_040};
`
export const LoggedInWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const LogoutBtn = styled.button`
  position: relative;
  padding: 0.8rem 4rem;
  margin-right: 1rem;
  border-radius: 0.2rem;

  border: none;

  background-color: ${COLOR.PRIMARY_060};
  color: ${COLOR.WHITE};

  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0%;
    height: 100%;
    background-color: ${COLOR.PRIMARY_070};
    transition: all 0.3s;
    transform-origin: center;
    opacity: 0.6;
  }

  &:hover:before {
    width: 100%;
  }
`
export const DefaultIcon = styled.div`
  font-size: 2.6rem;
  margin-right: 1rem;
`
export const Text = styled.span`
  font-size: 1.8rem;
  margin: 0 1rem;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Button = styled.div<{ type: string }>`
  position: relative;
  width: 13rem;
  height: 3.6rem;
  margin-right: 1rem;
  border-radius: 2rem;
  background-color: ${({ type }) => (type === 'signin' ? '#e36c61' : '#60948c')};
  user-select: none;

  & a {
    cursor: pointer;
  }
`

export const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding-right: 1rem;
  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > svg {
    transition: all 0.2s ease-in;
  }
  &:hover > svg {
    transform: scale(1.2);
    border-radius: 0.8rem;
  }
`
