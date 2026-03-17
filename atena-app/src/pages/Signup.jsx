import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <h1>Sign up</h1>
        <p className="auth-subtitle">
            Already have an account? <Link to="/login"><span>Login</span></Link>
        </p>
      </div>

      <div className="auth-form">
        <input type="text" placeholder="Name" className="auth-input" />
        <input type="email" placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        
        <button className="btn-primary">Let's go</button>
      </div>
    </div>
  );
}

export default Signup;