import useAuthContext from '@context/auth'
import DefaultAvatar from '@icons/DefaultAvatar'
import * as S from './Profile.style'
import * as CS from '../commom.style'

export default function Profile() {
  const { user } = useAuthContext()
  console.log(user)
  return (
    <CS.Container>
      <div>
        <div>upload</div>
        <S.AvatarImageWrapper>
          {user?.photoURL ? <img src={user.photoURL} alt="avatar" /> : <DefaultAvatar size={140} />}
        </S.AvatarImageWrapper>
        <div>{user?.displayName || user?.email}</div>
      </div>
    </CS.Container>
  )
}
