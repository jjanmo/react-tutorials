import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
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
          <SideListItem {...item} />
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

function SideListItem({ avatar, name }: ItemProps) {
  return (
    <S.SListItem divider>
      <ListItemAvatar>
        <Avatar alt="avatar" src={avatar} />
      </ListItemAvatar>
      <ListItemText>{name}</ListItemText>
    </S.SListItem>
  )
}
