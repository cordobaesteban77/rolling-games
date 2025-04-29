import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.jsx'
import HomeScreen from './components/HomeScreen.jsx'

const App = () => {
  return (
    <div>
      <HomeScreen />
    </div>
  )
}
export default App