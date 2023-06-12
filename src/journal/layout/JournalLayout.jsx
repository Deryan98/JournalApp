import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar, SideBar } from '../components'

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    //Es como un div
    <Box sx={{ display: 'flex'}}>
        <NavBar drawerWidth={ drawerWidth } />
        <SideBar drawerWidth={ drawerWidth } />
        {/* //fisicamente en lugar dee que sea un div sea la etiqueta main */}
        <Box component='main' sx={{ flexGrow: 1, p: 3}}>
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
