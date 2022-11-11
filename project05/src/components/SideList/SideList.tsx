import { Avatar, Link, List, ListItemAvatar, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { User } from '../../domain'
import * as S from './SideList.style'
import { useFetchUsers } from '../../hooks/queries'

export default function SideList() {
  const { data, isLoading } = useFetchUsers()

  return (
    <S.SBox>
      <List>
        {isLoading && <div>No Users</div>}
        {data?.users &&
          data?.users.length > 0 &&
          data?.users.map((user) => <SideListItem key={user.id} {...user} />)}
      </List>
    </S.SBox>
  )
}

function SideListItem({ id, image, firstName, lastName }: User) {
  return (
    <Link component={RouterLink} to={`/user/${id}`} underline="none">
      <S.SListItem divider>
        <ListItemAvatar>
          <Avatar alt="avatar" src={image} />
        </ListItemAvatar>
        <ListItemText>{`${firstName} ${lastName}`}</ListItemText>
      </S.SListItem>
    </Link>
  )
}
