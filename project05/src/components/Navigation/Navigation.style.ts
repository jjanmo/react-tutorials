import { Link } from 'react-router-dom'
import styled from 'styled-components'
import COLOR from '../../style/colors'

export const Container = styled.div`
  width: 100%;
  background-color: ${COLOR.PRIMARY_030};
`

export const NavWrapper = styled.ul`
  width: 100%;
  /* max-width: 37.5rem; */
  height: 6rem;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Item = styled.li`
  width: 33%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
`
