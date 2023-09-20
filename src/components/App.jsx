import React, { useEffect } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import '../styles/App.css'

const App = () => {
  window.onbeforeunload = (e) => {
    auth.signOut()
  }
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    { user ? navigate('/') : navigate('/login') }
  },[user])

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
