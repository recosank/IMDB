import { Box,Avatar,Typography } from '@mui/material'
import React from 'react'
import euphoria from './../images/euphoria.jpeg'

const Cast = ({img}) => {
  return (
    <Box display='flex'  flexDirection='row' sx={{border:'0px solid blue'}} mr={0} justifyContent='start'  alignItems='center'>
        <Avatar  src={euphoria} sx={{ width: '110px', height: '110px' }} />
        <Box flexItem alignSelf='center' ml={3} sx={{border:'0px solid red'}}>    
            <p style={{color:'white',margin:0,fontSize:'0.9rem',marginBottom:'5px',}} >Timothée Chalamet</p>
            <p style={{color:'#838996',margin:0,fontSize:'0.9rem'}} >as Paul Atreides</p>
        </Box>

    </Box>
  )
}

export default Cast