import { NavLink } from 'react-router-dom';
import homeIcon from '../assets/icons/home-icon.png'
import homeActiveIcon from '../assets/icons/home-active-icon.png'
import moviesIcon from '../assets/icons/movies-icon.png'
import moviesActiveIcon from '../assets/icons/movies-active-icon.png'
import bookIcon from '../assets/icons/book-icon.png'
import bookActiveIcon from '../assets/icons/book-active-icon.png'
import gameIcon from '../assets/icons/game-icon.png'
import gameActiveIcon from '../assets/icons/game-active-icon.png'
import chatIcon from '../assets/icons/chat-icon.png'
import chatActiveIcon from '../assets/icons/chat-active-icon.png'

function BottomNav() {
    return (
        <nav className="bottom-nav">
            <NavLink to="/" className="nav-item">
                {({ isActive }) => (
                    <>
                        <div className="indicator"></div>
                        <img src={isActive ? homeActiveIcon : homeIcon} alt="Home" />
                    </>
                )}
            </NavLink>
            
            <NavLink to="/films" className="nav-item">
                {({ isActive }) => (
                    <>
                        <div className="indicator"></div>
                        <img src={isActive ? moviesActiveIcon : moviesIcon} alt="Movies" />
                    </>
                )}
            </NavLink>

            <NavLink to="/books" className="nav-item">
                {({ isActive }) => (
                    <>
                        <div className="indicator"></div>
                        <img src={isActive ? bookActiveIcon : bookIcon} alt="Books" />
                    </>
                )}
            </NavLink>

            <NavLink to="/games" className="nav-item">
                {({ isActive }) => (
                    <>
                        <div className="indicator"></div>
                        <img src={isActive ? gameActiveIcon : gameIcon} alt="Game Icon" />
                    </>
                )}
            </NavLink>

            <NavLink to="/chat" className="nav-item">
                {({ isActive }) => (
                    <>
                        <div className="indicator"></div>
                        <img src={isActive ? chatActiveIcon : chatIcon} alt="Chat Icon" />
                    </>
                )}
            </NavLink>
        </nav>
    )
}

export default BottomNav