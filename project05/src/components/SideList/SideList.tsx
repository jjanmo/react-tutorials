import { Avatar, Link, List, ListItemAvatar, ListItemText } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { User } from '../../domain'
import * as S from './SideList.style'

export default function SideList() {
  const [list, setList] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () =>
      await fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((data) => setList(data.users))

    fetchUsers()
  }, [])

  return (
    <S.SBox>
      <List>
        {list && list.length > 0 ? (
          list.map((user) => <SideListItem key={user.id} {...user} />)
        ) : (
          <div>No Users</div>
        )}
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
