import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Tabless = () => {
    var[names,setNames]=useState(["Elzabeth","Teresa","Mariat"])
  return (
    <div style={{paddingTop:'50px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'30px'}}>Name</TableCell>
                        <TableCell style={{color:'red',fontFamily:'cursive',fontSize:'30px'}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((val,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{val}</TableCell>      
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tabless