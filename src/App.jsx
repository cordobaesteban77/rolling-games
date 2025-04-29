import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import GameScreen from './pages/GameScreen.jsx'
import InicioScreen from './pages/InicioScreen.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<InicioScreen />} />
            <Route path='/game/:id' element={<GameScreen />} />
            <Route path='/login' element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App