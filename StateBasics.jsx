import { Button,TextField,Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => { //arrowfunction
    var [pname,setPname]= useState("");
    var [val,setVal]= useState();
    var [gname,setGname]= useState("Home page");

const inputHandler =(e) => {
    setVal(e.target.value);
    console.log(val)
}

const changeName =() =>{
    setPname(val)
    setVal("")
}
const changeGname =() =>{
    setGname("Gallery")
}
const changeHname =() =>{
    setGname("Contacts")
}
const changeHename =() =>{
    setGname("Help")
}
  return (
    <div>
        <Typography variant='h4'>Hello {pname}</Typography>
        <br/>
        <TextField variant ='outlined' value={val} label='Name' onChange={inputHandler}></TextField>
        <br/><br/>
        <Button variant='contained' onClick={changeName}>Change</Button>
        <br/><br/>
        <Typography variant='h4'>Welcome to {gname}</Typography>        
        <br/>
        <Button variant='contained' onClick={changeGname} color='success'>Gallery</Button>
        <br/><br/>
        <Button variant='contained' onClick={changeHname} color='error'>Contacts</Button>
        <br/><br/>
        <Button variant='contained' onClick={changeHename}>Help</Button>
        <br/><br/>
    </div>
  )
}

export default StateBasics