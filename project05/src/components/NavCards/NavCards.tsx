import { CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { Title, SList, SCard, SContainer } from './NavCards.style'

export default function NavCards() {
  return (
    <SContainer fixed>
      <Title>Libraries 📚?!</Title>
      <SList>
        {/* {routes.map((route) => (
          <Link key={route.path} to={route.path}>
            <SCard variant="outlined">
              <CardMedia
                image={require(`../../assets/logo/${route.imageName}.png`)}
                component="img"
                sx={{ width: '70%' }}
              />
            </SCard>
          </Link>
        ))} */}
      </SList>
    </SContainer>
  )
}
