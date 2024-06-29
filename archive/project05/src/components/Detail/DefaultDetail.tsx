import * as S from './Detail.style'

export default function DefaultDetail() {
  return (
    <S.SBox sx={{ flexDirection: 'column' }}>
      <h1>This is React Router Demo 🚀</h1>
      <p>
        React Router is very curious and attractive library,
        <br />
        and keep developing continuously <br />
        If you have time, take a look this{' '}
        <a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">
          link
        </a>
      </p>
    </S.SBox>
  )
}
