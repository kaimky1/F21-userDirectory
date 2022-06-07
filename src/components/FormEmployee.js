import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewEmployee from './NewEmployee'
import Display from './Display'
import data from '../data/data'

const FormEmployee = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Display />}></Route>
        <Route path="/addEmployee" element={<NewEmployee data={data}/>} />
      </Routes> 
    </div>
  )
}

export default FormEmployee