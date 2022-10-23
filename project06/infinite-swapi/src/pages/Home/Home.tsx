import * as S from './Home.style';

function Home() {
  return (
    <S.Container>
      <h1>Which Scroll do you want to select? 🐥</h1>
      <S.ButtonContainer>
        <S.Button>Infinite Scroll</S.Button>
        <S.Button>LoadMore Scroll</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Home;
