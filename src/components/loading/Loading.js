
import { CircularProgress } from '@mui/material';
import React from 'react'
import './style.css';
function Loading() {
  return (
    <div className='loading-wrapper'>
      <CircularProgress/>
    </div>
  )
}

export default Loading
