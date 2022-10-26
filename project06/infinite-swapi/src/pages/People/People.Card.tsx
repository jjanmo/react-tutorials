import * as S from './People.style';

interface Props {
  name: string;
  height: string;
  hair_color: string;
  gender: string;
}

export default function Card({
  name,
  height,
  hair_color: hair,
  gender,
}: Props) {
  return (
    <S.CardContainer>
      <S.Name>{name}</S.Name>
      <S.Info>
        <S.Height>Height : {height}</S.Height>
        <S.Hair>Hair : {hair}</S.Hair>
        <S.Gender>Gender : {gender}</S.Gender>
      </S.Info>
    </S.CardContainer>
  );
}
