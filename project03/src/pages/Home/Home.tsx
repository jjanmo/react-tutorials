import LottieIcon from '@icons/LottieIcon'
import * as CS from '../commom.style'
import * as S from './Home.style'

function Home() {
  return (
    <CS.Container>
      <S.Wrapper>
        <LottieIcon type="koala" size={20} />
        <S.Title>Koala Talks</S.Title>
      </S.Wrapper>
    </CS.Container>
  )
}

export default Home
