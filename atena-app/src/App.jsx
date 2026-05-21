import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cinema from './pages/Cinema'
import Books from './pages/Books'
import Games from './pages/Games'
import Chats from './pages/Chats'
import BottomNav from './components/BottomNav'
import Header from './components/Header'
import MovieDetails from './pages/MovieDetails'

import MediaPage from './components/MediaPage'
import { MOVIES_DATA } from './data/mockData'

// App.jsx
function AppContent() {
  const location = useLocation();
  // Adicionamos a página de detalhes à lista de páginas que escondem a Nav se quiseres foco total
  const hideNav = ['/login', '/signup'].includes(location.pathname); 
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {!hideNav && <div className="top-fade-overlay"></div>}
      {!hideNav && <Header onSearch={setSearchQuery} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/films" element={<MediaPage title="Movies" searchQuery={searchQuery} />} />
        <Route path="/series" element={<MediaPage title="Series" searchQuery={searchQuery}/>} />
        
        {/* NOVA ROTA: O ':id' é um parâmetro dinâmico que o React reconhece */}
        <Route path="/movie/:id" element={<MovieDetails />} /> 

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