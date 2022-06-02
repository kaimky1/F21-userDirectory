import React from 'react'
import { DisplayNumberContext } from './Display'
import { useContext } from 'react'

const DisplayNumber = () => {

    const {count, dataLength} = useContext(DisplayNumberContext)
    
  return (
    <div>{count + 1}/{dataLength}</div>
  
  )
}

export default DisplayNumber