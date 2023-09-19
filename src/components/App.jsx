import React, { useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import { auth } from '../config/firebase'
import '../styles/App.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Dashboard /> }/>
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </>
  )
  
}

export default App
