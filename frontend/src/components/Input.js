import React from 'react'
import Box from '@mui/material/Box';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({lable,name,value,onChg,type}) => {
  return (
    <Box display='flex' flexShrink={2} mt={1.7} flexDirection='column'>
        <lable>{lable}</lable>
        <input name={name} value={value} onChange={onChg} style={{height:'1.25rem'}} type={type} />
    </Box>
  )
}

export default Input