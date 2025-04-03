import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import loginImage from '../../assets/images/login-image.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check credentials
    if (username === 'admin' && password === 'admin') {
      // Successful login - redirect to Time page
      navigate('/time-tracking');
    } else {
      // Failed login - show error
      setError('Wrong username and password');
    }
  };

  return (
    <div className="login-container">
      {/* Image Section - Visible only on desktop */}
      <div className="login-image-section">
        <img src={loginImage} alt="Time Tracking Illustration" className="login-image" />
      </div>

      {/* Form Section */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>
          
          {error && <div className="login-error">{error}</div>}
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter your username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-options">
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>
            </div>
            
            <button type="submit" className="login-button">
              Login
            </button>
            
            <div className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;