import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import useAuthContext from '@context/auth'
import LottieIcon from '@icons/LottieIcon'
import { LottieType, koalas } from '@constants/lottie'
import * as S from './Header.style'
import { getRandom } from '@utils/functions'
import COLOR from '@style/colors'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { loggedIn, logOut } = useAuthContext()
  const [logoIcon, setLogoIcon] = useState<LottieType>()

  const handleLogoutClick = () => {
    const goHome = () => navigate('/')
    logOut(goHome)
  }

  useEffect(() => {
    const index = getRandom(koalas.length)
    setLogoIcon(koalas[index])
  }, [pathname])

  return (
    <S.OuterContainer>
      <S.Logo>{logoIcon && <LottieIcon type={logoIcon.theme} name={logoIcon.name} />}</S.Logo>
      <S.InnerContainer>
        <S.Nav>
          <S.Item $active={pathname === '/'}>
            <Link to="/">Home</Link>
          </S.Item>
          {loggedIn && (
            <>
              <S.Item $active={pathname === '/talk'}>
                <Link to="/talk">Talk</Link>
              </S.Item>
              <S.Item $active={pathname === '/profile'}>
                <Link to="/profile">Profile</Link>
              </S.Item>
            </>
          )}
        </S.Nav>

        {loggedIn ? (
          <div>
            <S.Button onClick={handleLogoutClick}>
              <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
            </S.Button>
          </div>
        ) : (
          <div>
            <S.LinkButton to="/signin" color={COLOR.PRIMARY_020} $borderColor={COLOR.PRIMARY_010}>
              <FontAwesomeIcon icon={faRightToBracket} size="lg" />
            </S.LinkButton>
            <S.LinkButton to="/signup" color={COLOR.PRIMARY_110} $borderColor={COLOR.PRIMARY_100}>
              <FontAwesomeIcon icon={faUserPlus} size="1x" />
            </S.LinkButton>
          </div>
        )}
      </S.InnerContainer>
    </S.OuterContainer>
  )
}

export default Header
