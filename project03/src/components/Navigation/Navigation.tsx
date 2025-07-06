import { useLocation } from 'react-router-dom'
import * as S from './Navigation.style'

function Navigation() {
  const { pathname } = useLocation()

  return (
    <S.Container>
      <S.NavWrapper>
        <S.Item $active={pathname === '/'}>
          <S.StyledLink to="/">Home</S.StyledLink>
        </S.Item>
        <S.Item $active={pathname === '/talk'}>
          <S.StyledLink to="/talk">Talk</S.StyledLink>
        </S.Item>
        <S.Item $active={pathname === '/profile'}>
          <S.StyledLink to="/profile">Profile</S.StyledLink>
        </S.Item>
      </S.NavWrapper>
    </S.Container>
  )
}

export default Navigation
