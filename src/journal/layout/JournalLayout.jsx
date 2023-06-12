import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components'

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    //Es como un div
    <Box sx={{ display: 'flex'}}>
        <NavBar drawerWidth={ drawerWidth } />
        {/* Sidebar */}
        {/* //fisicamente en lugar dee que sea un div sea la etiqueta main */}
        <Box component='main' sx={{ flexGrow: 1, p: 3}}>
            {/* Toobar */}
            {children}
        </Box>
    </Box>
  )
}
