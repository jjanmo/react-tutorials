import { Tab } from '@mui/material'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import * as S from './GNB.style'
import Home from '../../pages/home'

export default function GNB() {
  return (
    // <S.STabs centered>
    //   <Tab label="Home" value="/home" LinkComponent={Link} />
    //   <Tab label="React Router Tutorial" value="/react-router" LinkComponent={Link} />
    //   <Tab label="React Hook Form" value="/hook-form" />
    //   <Tab label="DND kit" value="/dnd-board" />
    //   <Tab label="D3 Charts" value="/d3-chart" />
    // </S.STabs>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="react-router">React Router Tutorial</NavLink>
      <NavLink to="hook-form">DND Kit</NavLink>
      <NavLink to="d3-chart">D3 Charts</NavLink>
    </div>
  )
}
