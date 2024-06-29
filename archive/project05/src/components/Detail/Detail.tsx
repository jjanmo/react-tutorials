import { Button, Tooltip } from '@mui/material'
import { Male, Female } from '@mui/icons-material'
import * as S from './Detail.style'
import { useParams } from 'react-router-dom'
import { useFetchUser } from '../../hooks/queries'

export default function Detail() {
  const { userId } = useParams()
  const { data: user, isLoading } = useFetchUser(Number(userId))

  return (
    <S.SBox>
      {isLoading ? (
        <div style={{ fontSize: '2rem' }}>Loading... 🚀</div>
      ) : (
        <S.GridContainer container>
          <S.GridItem item xs={6}>
            <img src={user?.image} width="auto" height="70%" alt="avatar" />
          </S.GridItem>
          <S.GridItem item xs={6}>
            <h2>{`${user?.firstName} ${user?.lastName}`}</h2>
            <div>
              <S.Row>
                <em>{user?.username} </em>
                {user?.gender === 'male' ? (
                  <Tooltip title="Male">
                    <Male color="primary" fontSize="large" />
                  </Tooltip>
                ) : (
                  <Tooltip title="Female">
                    <Female color="error" fontSize="large" />
                  </Tooltip>
                )}
              </S.Row>
              <S.Row>{user?.email}</S.Row>
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
      )}
    </S.SBox>
  )
}
