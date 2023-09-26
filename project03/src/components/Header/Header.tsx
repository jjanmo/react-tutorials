import useAuthContext from '@context/auth'
import Signin from '@icons/Signin'
import Signup from '@icons/Signup'
import * as S from './Header.style'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import COLOR from '@style/colors'

function Header() {
  const { loggedIn, user, logOut } = useAuthContext()

  return (
    <S.Container>
      {loggedIn ? (
        <>
          <S.LoggedInWrapper>
            {user.providerData[0].providerId.includes('google') && <FcGoogle size={30} />}
            {user.providerData[0].providerId.includes('github') && (
              <BsGithub size={26} color={COLOR.BLACK} />
            )}
            {user.providerData[0].providerId.includes('password') && (
              <S.DefaultIcon>✉️</S.DefaultIcon>
            )}
            <S.Text>{user.displayName || user.email}</S.Text>
          </S.LoggedInWrapper>
          <S.LogoutBtn onClick={logOut}>logout</S.LogoutBtn>
        </>
      ) : (
        <S.ButtonWrapper>
          <S.Button type="signin">
            <S.SLink to="/signin">
              <Signin />
              signin
            </S.SLink>
          </S.Button>
          <S.Button type="signup">
            <S.SLink to="/signup">
              <Signup />
              signup
            </S.SLink>
          </S.Button>
        </S.ButtonWrapper>
      )}
    </S.Container>
  )
}

export default Header
