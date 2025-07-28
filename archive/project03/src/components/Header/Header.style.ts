import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import COLOR from '@style/colors'

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
export const LogoutIcon = styled(FontAwesomeIcon)``
export const Button = styled.button`
  ${buttonStyles}

  width: 100px;
  height: 36px;
  border: 2px solid ${COLOR.PRIMARY_090};
  border-radius: 0.5rem;
  color: ${COLOR.PRIMARY_080};
  background-color: ${COLOR.PRIMARY_070};

  &::before {
    content: 'logout';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
  }
  &:hover:before {
    left: -30%;
    opacity: 0;
  }
  ${LogoutIcon} {
    opacity: 0;
    transition: opacity 0.5s 0.1s;
  }
  &:hover ${LogoutIcon} {
    opacity: 1;
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
