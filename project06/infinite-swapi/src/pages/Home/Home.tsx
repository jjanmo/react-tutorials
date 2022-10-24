import { Link } from 'react-router-dom';
import * as S from './Home.style';

function Home() {
  return (
    <S.Container>
      <h1>Which Scroll do you want to select? 🐥</h1>
      <S.ButtonContainer>
        <S.Button>
          <Link to="/people">People 🙇🏻</Link>
        </S.Button>
        <S.Button>
          <Link to="/starship">Starship 🚀</Link>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Home;
