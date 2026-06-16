import { useState } from 'react';
import './Signup.css';
import API from './api/axiosConfig';
import{useNavigate} from 'react-router-dom';
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload hone se rokta hai
    try {
      const response = await API.post('/signup', {
        name,
        email,
        password,
        role
      });

      localStorage.setItem('token', response.data.token);
      if (role === 'vendor') {
      localStorage.setItem('userId', response.data.user?._id || response.data._id);
      navigate('/vendor-register');
    } else {
      alert('Account created successfully!');
      navigate('/login');
    }

  } catch (err) {
    setError(err.response?.data?.msg || 'Signup failed');
  }
};

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join EventEase to start managing your events.</p>
         {error && <p style={{color: 'red'}}>{error}</p>}

          <form className="signup-form" onSubmit={handleSubmit}>


          <div className="input-group">
            <label>NAME</label>
            <input type="Name" placeholder="Asma Noreen" value={name}
            onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="input-group">
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="example@email.com" value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <label>PASSWORD</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
              <span 
                className="eye-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️‍🗨️" : "👁️"}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>I AM A...</label>
            <select className="role-dropdown" value={role}
            onChange={(e)=>setRole(e.target.value)}
            >
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>

          <button type="submit" className="signup-btn">Create Account</button>
        </form>

        <p className="footer-text">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;