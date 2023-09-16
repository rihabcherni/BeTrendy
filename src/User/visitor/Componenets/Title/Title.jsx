import React from 'react'
import './Title.scss'
import { Box, Typography } from '@mui/material'
export default function Title(props) {
  return (
      <Box className="title-box">
        <Typography variant='h5' className="text-primary">{props.title}</Typography>
        <Typography variant='h6' className="text-sub">{props.souTitle}</Typography>
      </Box>
  )
}
