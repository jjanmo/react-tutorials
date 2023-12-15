import useAuthContext from '@context/auth'
import DefaultAvatar from '@icons/DefaultAvatar'
import * as S from './Profile.style'
import * as CS from '../commom.style'
import useAvatar from '@hooks/useAvatar'

export default function Profile() {
  const { user } = useAuthContext()
  const { getDefaultAvatar } = useAvatar({ uid: user?.uid })

  const image = getDefaultAvatar()
  console.log(user, image)
  return (
    <CS.Container>
      <div>
        <div>upload</div>
        <S.Box>
          <img src={image} alt="avatar" />
        </S.Box>
        <S.AvatarImageWrapper>
          {user?.photoURL ? <img src={user.photoURL} alt="avatar" /> : <DefaultAvatar size={140} />}
        </S.AvatarImageWrapper>
        <div>{user?.displayName || user?.email}</div>
      </div>
    </CS.Container>
  )
}
