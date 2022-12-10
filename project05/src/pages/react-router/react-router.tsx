import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SearchBar from '../../components/SearchBar'
import SideList from '../../components/SideList'

export default function ReactRouter() {
  return (
    <GridContainer container>
      <GridItem item xs={4} location="left">
        <SearchBar />
        <SideList />
      </GridItem>
      <GridItem item xs={8} location="right">
        <Outlet />
      </GridItem>
    </GridContainer>
  )
}

const GridContainer = styled(Grid)`
  width: 100%;
  height: 100vh;
`
const GridItem = styled(Grid)<{ location: 'left' | 'right' }>`
  background-color: ${({ location }) => (location === 'right' ? '#f5f6fa' : '#dff9fb')};
`
