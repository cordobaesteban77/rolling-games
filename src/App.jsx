import React, { useEffect } from 'react'
import {getGames} from "./data/api.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.jsx'

const App = () => {
  useEffect(() => {
    getGames().then((respuesta) => {
      console.log(respuesta)
    })
  }, [])
  
  
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App