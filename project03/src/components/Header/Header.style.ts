import COLOR from '@style/colors'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'

export const OuterContainer = styled.div`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 2rem;
  background-color: ${COLOR.PRIMARY_030};
`
export const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
`
export const InnerContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Nav = styled.ul`
  display: flex;
`
export const Item = styled.li<{ $active: boolean }>`
  position: relative;
  padding: 0 0.5rem;
  font-weight: 600;
  color: ${COLOR.PRIMARY_050};

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? '100%' : 0)};
    height: 3px;
    border-radius: 1rem;
    background-color: ${COLOR.PRIMARY_050};
    transition: width 0.5s;
  }
  & + & {
    margin-left: 1rem;
  }
`

const buttonStyles = css`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
`
export const Button = styled.button`
  ${buttonStyles}

  padding: 0.6rem 3rem;
  border: 2px solid ${COLOR.PRIMARY_090};
  border-radius: 0.5rem;
  color: ${COLOR.PRIMARY_080};
  background-color: ${COLOR.PRIMARY_070};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 0%;
    height: 100%;
    background-color: ${COLOR.PRIMARY_090};
    transition: width 0.5s;
    opacity: 0.4;
  }
  &:hover:before {
    width: 100%;
  }
`
export const LinkButton = styled(Link)<{ color: string; $borderColor: string }>`
  ${buttonStyles}

  padding: 0.6rem 2.4rem;
  border-radius: 0.8rem;
  color: ${({ color }) => color};
  border-color: ${({ $borderColor }) => $borderColor};
  border-width: 2px;
  border-style: solid;
  transition: color 0.5s;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    color: ${({ $borderColor }) => $borderColor};
  }
`
