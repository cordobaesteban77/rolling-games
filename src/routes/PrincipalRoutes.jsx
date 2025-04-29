import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from '../components/HomeScreen'
import GameScreen from '../pages/GameScreen'
// import NotFoundScreen from '../pages/NotFoundScreen'
import NavbarApp from '../components/NavbarApp'
import AdminScreen from '../pages/AdminScreen'
import AdminRoute from './AdminRoute'

const PrincipalRoutes = () => {
  return (
    <>
    <NavbarApp />
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/game/:id" element={<GameScreen />} />
        <Route path="/admin" element={
          
            <AdminScreen />
          } />
        {/* <Route path="*" element={<NotFoundScreen />} /> */}
    </Routes>
    </>
  )
}

export default PrincipalRoutes