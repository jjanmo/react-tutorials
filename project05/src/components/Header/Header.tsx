import { AuthContext } from '@context/auth'
import { useContext } from 'react'
import KoalaText from '@icons/KoalaText'
import Signin from '@icons/Signin'
import Signup from '@icons/Signup'
import * as S from './Header.style'

function Header() {
  const { user, logOut } = useContext(AuthContext)

  return (
    <S.Container>
      {user ? (
        <>
          <div>{user.email}</div>
          <S.LogoutBtn onClick={logOut}>logout</S.LogoutBtn>
        </>
      ) : (
        <>
          <KoalaText />
          <S.ButtonWrapper>
            <S.Button type="signin">
              <Signin />
              <S.SLink to="/signin">signin</S.SLink>
            </S.Button>
            <S.Button type="signup">
              <Signup />
              <S.SLink to="/signup">signup</S.SLink>
            </S.Button>
          </S.ButtonWrapper>
        </>
      )}
    </S.Container>
  )
}

export default Header
