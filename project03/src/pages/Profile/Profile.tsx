import useAuthContext from '@context/auth'
import * as S from './Profile.style'
import * as CS from '../commom.style'
import useAvatar from '@hooks/useAvatar'

export default function Profile() {
  const { user } = useAuthContext()
  const { getDefaultAvatar } = useAvatar({ uid: user?.uid })

  const defaultImage = getDefaultAvatar()

  return (
    <CS.Container>
      <div>
        <div>upload</div>
        <S.AvatarImageWrapper>
          <img src={user?.photoURL || defaultImage} alt="avatar" />
        </S.AvatarImageWrapper>
        <div>{user?.displayName || user?.email}</div>
      </div>
    </CS.Container>
  )
}
