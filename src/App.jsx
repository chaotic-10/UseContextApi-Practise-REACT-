import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

const App = () => {
  return (
    
    <UserContextProvider>
        <h1>CONTEXT API</h1>
        <Profile/>
        <Login/>
    </UserContextProvider>
  )
}

export default App
