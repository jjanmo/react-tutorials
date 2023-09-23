import COLOR from '@style/colors'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`
export const NavWrapper = styled.ul`
  width: 100%;
  height: 6rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Item = styled.li<{ $active: boolean }>`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;

  color: ${({ $active }) => ($active ? COLOR.PRIMARY_030 : COLOR.BLACK)};
  background-color: ${({ $active }) => ($active ? COLOR.PRIMARY_050 : COLOR.PRIMARY_030)};
`
export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`
