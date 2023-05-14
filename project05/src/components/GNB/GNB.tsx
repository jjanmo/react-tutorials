import { Box, Tab, Tabs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { routes } from '../../constants/routes'

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
        {routes.map((route) => (
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
