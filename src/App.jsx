import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen.jsx'
import HomeScreen from './components/HomeScreen.jsx'
import GameScreen from './pages/GameScreen.jsx'
import InicioScreen from './pages/InicioScreen.jsx'
import RegistroScreen from './pages/RegistroScreen.jsx'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'
import PrincipalRoutes from './routes/PrincipalRoutes.jsx'

const App = () => {
  return (
    <div className='bg-dark'>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={
          <ProtectedRoutes>
            <PrincipalRoutes />  
          </ProtectedRoutes>
          } />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
