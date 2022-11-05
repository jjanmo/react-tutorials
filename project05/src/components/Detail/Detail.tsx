import { Button, Tooltip } from '@mui/material'
import { Male, Female } from '@mui/icons-material'
import * as S from './Detail.style'
import { useEffect, useState } from 'react'
import { User } from '../../domain'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const { userId } = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUser = async (id = 1) =>
      fetch(`https://dummyjson.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))

    fetchUser(Number(userId))
  }, [userId])

  return (
    <S.SBox>
      {user ? (
        <S.GridContainer container>
          <S.GridItem item xs={6}>
            <img src={user?.image} width="80%" height="80%" />
          </S.GridItem>
          <S.GridItem item xs={6}>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <div>
              <S.Row>
                <em>{user.username} </em>
                {user.gender === 'male' ? (
                  <Tooltip title="Male">
                    <Male color="primary" fontSize="large" />
                  </Tooltip>
                ) : (
                  <Tooltip title="Female">
                    <Female color="error" fontSize="large" />
                  </Tooltip>
                )}
              </S.Row>
              <S.Row>{user.email}</S.Row>
            </div>

            <S.SButtonGroup>
              <Button color="success" size="medium" variant="contained" fullWidth>
                Edit
              </Button>
              <Button color="warning" size="medium" variant="contained" fullWidth>
                Delete
              </Button>
            </S.SButtonGroup>
          </S.GridItem>
        </S.GridContainer>
      ) : (
        <div style={{ fontSize: '2rem' }}>Loading... 🚀</div>
      )}
    </S.SBox>
  )
}
