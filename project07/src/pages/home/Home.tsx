import * as S from './Home.style';

export default function Home() {
  return (
    <S.Container>
      <S.Scene>
        <S.Item>
          <S.Content>Number1</S.Content>
        </S.Item>
        <S.Item>
          <S.Content>Number2</S.Content>
        </S.Item>
        <S.Item>
          <S.Guide>Hover me</S.Guide>
          <S.Content>Number3</S.Content>
        </S.Item>
        <S.Item>
          <S.Content>Number4</S.Content>
        </S.Item>
        <S.Item>
          <S.Content>Number5</S.Content>
        </S.Item>
      </S.Scene>
    </S.Container>
  );
}
