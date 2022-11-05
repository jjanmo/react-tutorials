import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Detail from '../components/Detail'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <Grid container sx={{ width: '100%', height: '100vh' }}>
      <Grid item xs={4} sx={{ bgcolor: '#dff9fb' }}>
        <SearchBar />

        <ul>
          <li>Jonh</li>
          <li>Homes</li>
          <li>Hello</li>
          <li>Enola</li>
          <li>Omnajj</li>
        </ul>
      </Grid>
      <Grid item xs={8} sx={{ bgcolor: '#95afc0' }}>
        <div>
          hello detailsssss hello detailsssss hello detailsssss hello detailsssss hello detailsssss
        </div>
      </Grid>
    </Grid>
  )
}
