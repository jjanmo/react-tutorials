import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '@context/auth'
import LottieIcon from '@icons/LottieIcon'
import { LottieType, koalas } from '@constants/lottie'
import * as S from './Header.style'
import { getRandom } from '@utils/functions'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { loggedIn, user, logOut } = useAuthContext()
  const [logoIcon, setLogoIcon] = useState<LottieType>()

  const handleLogoutClick = () => {
    const goHome = () => navigate('/')
    logOut(goHome)
  }

  // 코알라로고 | 홈  | 로그인 - 회원가입

  // 코알라로고 | 홈 | 토크 | 프로파일 | 로그아웃

  useEffect(() => {
    const index = getRandom(koalas.length)
    setLogoIcon(koalas[index])
  }, [])

  return (
    <S.Container>
      <S.Logo>{logoIcon && <LottieIcon type={logoIcon.theme} name={logoIcon.name} />}</S.Logo>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {loggedIn && (
          <>
            <li>
              <Link to="/talk">Talk</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>

      {loggedIn ? (
        <div>
          <button onClick={handleLogoutClick}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signin">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
          <Link to="/signup">
            <FontAwesomeIcon icon={faUserPlus} />
          </Link>
        </div>
      )}

      {/* {loggedIn ? (
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
          <S.LogoutBtn onClick={handleLogoutClick}>logout</S.LogoutBtn>
        </>
      ) : (
        <S.ButtonWrapper>
          <S.Button type="signin">
          </S.Button>
          <S.Button type="signup">
          </S.Button>
        </S.ButtonWrapper>
      )} */}
    </S.Container>
  )
}

export default Header
