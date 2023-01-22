import LottieIcon from '@icons/LottieIcon'
import * as CS from '../commom.style'
import * as S from './Home.style'

function Home() {
  return (
    <CS.Container>
      <LottieIcon type="koala" size={20} />
      <S.Welcome>Welcome KoalaTalks</S.Welcome>
    </CS.Container>
  )
}

export default Home
