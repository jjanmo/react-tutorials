import LottieIcon from '@icons/LottieIcon'
import * as S from './Home.style'

function Home() {
  return (
    <S.Container>
      <LottieIcon type="koala" size={20} />
      <S.Welcome>Welcome KoalaTalks</S.Welcome>
    </S.Container>
  )
}

export default Home
