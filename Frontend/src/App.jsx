import { useState } from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signUp/Signup'
import Home from './pages/home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {authUser} = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup/>} />
        <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login />} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
