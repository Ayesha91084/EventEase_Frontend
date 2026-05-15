import  { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import googleIcon from './google-icon.png'; 
import API from './api/axiosConfig';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState('');      
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      navigate('/dashboard'); // apne route pe change karo
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-box">
             <span className="calendar-icon">📅</span>
          </div>
          <h1>EventEase</h1>
          <p className="subtitle">Plan your perfect moment</p>
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}

        {/* Form Section */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email"value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password"value={password}
                onChange={(e) => setPassword(e.target.value)}
 
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </button>
            </div>
          </div>

          <div className="forgot-password">
            <a href="#forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <button className="google-btn">
                  <img src={googleIcon} alt="Google" />
                  Sign up with Google
                </button>

        {/* Footer */}
        <p className="footer-text">
          Don't have an account? <a href="#signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;