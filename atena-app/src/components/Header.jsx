import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import userIcon from "../assets/icons/user-icon.png"
import searchIcon from "../assets/icons/search-icon.png"

function Header({ onSearch}) {
    const location = useLocation();

    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setIsSearching(false);
        setSearchTerm("");
        if (onSearch) {
            onSearch("");
        }
    }, [location, onSearch]);

    const showSearch = [
        '/cinema', '/films', '/series', '/books', '/games', '/chat'
    ].includes(location.pathname);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    return (
        <header className="header-container">
            <div className="header">
                <h1>Atena</h1>

                <div className = "header-right">
                    {showSearch && (
                        <button className="search-btn" onClick={() => setIsSearching(!isSearching)}>
                            <img src={searchIcon} alt="Search" />
                        </button>
                    )}
                    <div className="user-icon">
                        <img src={userIcon} alt="User Icon" /> 
                    </div>
                </div>
            </div>
            
            {isSearching && (
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search..."
                        autoFocus
                        className="search-input"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
            )}
           
        </header>
    )
}

export default Header