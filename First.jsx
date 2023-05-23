import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

const First = () => {
  return (
    <div>

        <h1>Elzabeth Lalson</h1>
        <input placeholder="Name"/>    
        <br/>
        <input type="password" placeholder='password'/>
        <br/>
        <button>Submit</button>
        <Typography varient ='h1' color='turquoise' fontSize={60}>Elzabeth Lalson</Typography>
        <br/>
        <TextField variant='outlined' label='Name'/>
        <br/>
        <br/>
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default First