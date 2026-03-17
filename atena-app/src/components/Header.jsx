import userIcon from "../assets/icons/user-icon.png"

function Header() {
    return (
        <header className="header">
            <h1>Atena</h1>
            <div className="user-icon">
                <img src={userIcon} alt="User Icon" /> 
            </div>
        </header>
    )
}

export default Header