import { ROUTES } from '@/constants/routes'
import { Link } from '@tanstack/react-router'
import { memo } from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      {ROUTES.map((route) => (
        <li key={route.path}>
          <Link
            to={route.path}
            activeProps={{
              style: { borderBottom: '2px solid #3498db', color: '#3498db' },
            }}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </Container>
  )
}

export default memo(Header)

const Container = styled.ul`
  list-style: none;
  display: flex;
  padding: 1rem;
  background-color: #dff9fb;

  & li {
    margin: 0 1rem;
  }
`
