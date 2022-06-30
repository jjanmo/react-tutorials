import LottieIcon from '@icons/LottieIcon'
import * as S from './Home.style'
import * as CS from './commom.style'

function Home() {
  return (
    <CS.Container>
      <LottieIcon type="koala" size={20} />
      <S.Welcome>Welcome KoalaTalks</S.Welcome>
    </CS.Container>
  )
}

export default Home
