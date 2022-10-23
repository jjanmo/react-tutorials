import { Link } from 'react-router-dom';
import * as S from './Home.style';

function Home() {
  return (
    <S.Container>
      <h1>Which Scroll do you want to select? 🐥</h1>
      <S.ButtonContainer>
        <S.Button>
          <Link to="/infinite-scroll">Infinite Scroll</Link>
        </S.Button>
        <S.Button>
          <Link to="/loadmore-scroll">LoadMore Scroll</Link>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Home;
