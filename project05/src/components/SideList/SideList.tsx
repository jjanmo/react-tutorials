import { Avatar, Link, List, ListItemAvatar, ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import * as S from './SideList.style'

export default function SideList() {
  // TODO : props or API
  const list = [
    {
      id: 1,
      name: 'alexander',
      avatar: `${process.env.PUBLIC_URL}/default-avatar.png`,
    },
    {
      id: 2,
      name: 'enola',
      avatar: `${process.env.PUBLIC_URL}/default-avatar.png`,
    },
    {
      id: 3,
      name: 'katherine',
      avatar: `${process.env.PUBLIC_URL}/default-avatar.png`,
    },
    {
      id: 4,
      name: 'melanie',
      avatar: `${process.env.PUBLIC_URL}/default-avatar.png`,
    },
  ]

  return (
    <S.SBox>
      <List>
        {list.map((item) => (
          <SideListItem key={item.id} {...item} />
        ))}
      </List>
    </S.SBox>
  )
}

interface ItemProps {
  id: number
  name: string
  avatar: string
}

function SideListItem({ id, avatar, name }: ItemProps) {
  return (
    <Link component={RouterLink} to={`/user/${id}`} underline="none">
      <S.SListItem divider>
        <ListItemAvatar>
          <Avatar alt="avatar" src={avatar} />
        </ListItemAvatar>
        <ListItemText>{name}</ListItemText>
      </S.SListItem>
    </Link>
  )
}
