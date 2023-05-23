import { AppBar,Button,Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow: 1 }} align='left' color='darkblue'>NewApp</Typography>
                <Button variant='text' color='error'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar