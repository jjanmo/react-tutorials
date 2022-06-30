import * as S from './Navigation.style'

function Navigation() {
  return (
    <S.Container>
      <S.NavWrapper>
        <S.Item>
          <S.StyledLink to="/">Home</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink to="/talks">Talks</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink to="/todos">Todo</S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink to="/me">Profile</S.StyledLink>
        </S.Item>
      </S.NavWrapper>
    </S.Container>
  )
}

export default Navigation
