import React from 'react'
import WarningIcon from '@mui/icons-material/Warning';
import './Page404.scss'
import { Box, Typography } from '@mui/material'
function Page404() {
  return (
    <Box sx={{ textAlign:"center", p:6 }}>
        <Typography variant='h1'><WarningIcon fontSize='LARGE'/></Typography>
        <Typography variant='h2'>Page 404</Typography>         
        <Typography variant='h4'>Page not found</Typography>         
        <Typography variant='h6'>We're sorry, the page you have looked for does not exist in our website!</Typography>         
    </Box>
  )
}

export default Page404