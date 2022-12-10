import { Box, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom'
import { CARD_DATA } from './Card.data'
import { Title, SList, SCard, SContainer } from './NavCards.style'

export default function NavCards() {
  return (
    <SContainer fixed>
      <Title>Libraries 📚?!</Title>
      <SList>
        {CARD_DATA.map((card, index) => (
          <Link key={index} to={card.path}>
            <SCard variant="outlined">
              <CardMedia image={card.image} component="img" sx={{ width: '70%' }} />
            </SCard>
          </Link>
        ))}
      </SList>
    </SContainer>
  )
}
