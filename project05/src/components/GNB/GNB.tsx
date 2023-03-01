import { Box, Tab, Tabs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

type RouteType = {
  title: string
  path: string
}
const ROUTES: RouteType[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'RRD-Tutorial',
    path: '/rrd-tutorial',
  },
  {
    title: 'DragNDrop',
    path: '/dragndrop',
  },
  {
    title: 'About',
    path: '/about',
  },
]

export default function GNB() {
  const { pathname } = useLocation()
  const [currentTab, setCurrentTab] = useState<string>(pathname)

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <Box
      p={2}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
    >
      <Tabs variant="scrollable" onChange={handleChange} value={currentTab}>
        {ROUTES.map((route) => (
          <Tab
            key={route.path}
            label={route.title}
            value={route.path}
            to={route.path}
            component={Link}
          />
        ))}
      </Tabs>
    </Box>
  )
}
