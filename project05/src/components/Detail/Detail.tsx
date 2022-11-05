import { Button, Tooltip } from '@mui/material'
import { Male, Female } from '@mui/icons-material'
import * as S from './Detail.style'

export default function Detail() {
  const user = {
    id: 1,
    firstName: 'Terry',
    lastName: 'Medhurst',
    gender: 'woman',
    email: 'atuny0@sohu.com',
    username: 'atuny0',
    image: 'https://robohash.org/hicveldicta.png?size=200x200&set=set1',
  }

  return (
    <S.SBox>
      <S.GridContainer container>
        <S.GridItem item xs={6}>
          <img src={user.image} width="80%" height="80%" />
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
    </S.SBox>
  )
}
