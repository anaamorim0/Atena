import { Link } from 'react-router-dom'
import userIcon from "../assets/icons/user-icon.png"   

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Login</h1>
        <p className="auth-subtitle">
            Don't have an account yet? <Link to="/signup"><span>Sign up</span></Link>
        </p>
      </div>

      <div className="auth-form">
        <input 
          type="email" 
          placeholder="Email" 
          className="auth-input" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="auth-input" 
        />
        
        <button className="btn-primary">Let's go</button>
      </div>
    </div>
  );
}
export default Login