import { Tab, Tabs } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { routes, RouteType } from '../../constants/routes'

export default function GNB() {
  const { pathname } = useLocation()
  const [currentTab, setCurrentTab] = useState<string>(pathname)

  const newRoutes: RouteType[] = [
    {
      title: 'Home',
      path: '/',
      imageName: '',
    },
    ...routes,
  ]

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue)
  }

  return (
    <Tabs variant="fullWidth" onChange={handleChange} value={currentTab}>
      {newRoutes.map((route) => (
        <Tab
          key={route.path}
          label={route.title}
          value={route.path}
          to={route.path}
          component={Link}
        />
      ))}
    </Tabs>
  )
}
