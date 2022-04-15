import LottieIcon from 'src/icons/LottieIcon'
import * as S from './Navigation.style'

function Navigation() {
  return (
    <S.Container>
      <S.NavWrapper>
        <S.Item>
          <S.StyledLink to="/">
            <LottieIcon type="home" size={5} />
          </S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink to="/talks">
            <LottieIcon type="talks" size={8} />
          </S.StyledLink>
        </S.Item>
        <S.Item>
          <S.StyledLink to="/me">
            <LottieIcon type="koala" size={6} />
          </S.StyledLink>
        </S.Item>
      </S.NavWrapper>
    </S.Container>
  )
}

export default Navigation
