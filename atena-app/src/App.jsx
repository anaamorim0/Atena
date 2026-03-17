import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Films from './pages/Films'
import Books from './pages/Books'
import Games from './pages/Games'
import Chats from './pages/Chats'
import BottomNav from './components/BottomNav'
import Header from './components/Header'

function AppContent() {
  const location = useLocation();
  const hideNav = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* O Header só deve aparecer se NÃO for login/signup (opcional, conforme o teu design) */}
      {!hideNav && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/films" element={<Films />} />
        <Route path="/books" element={<Books />} />
        <Route path="/games" element={<Games />} />
        <Route path="/chat" element={<Chats />} />
      </Routes>

      {!hideNav && <BottomNav />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;