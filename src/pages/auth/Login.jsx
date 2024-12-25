import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setError('');
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Add login logic here
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="auth-page"
    >
      <div className="auth-container">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Sign in to your Lotus Bliss account</p>

        <div className="social-auth">
          <button className="social-btn google">
            <FaGoogle /> Continue with Google
          </button>
          <button className="social-btn facebook">
            <FaFacebookF /> Continue with Facebook
          </button>
          <button className="social-btn apple">
            <FaApple /> Continue with Apple
          </button>
        </div>
        
        <div className="divider">
          <span>or</span>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner" />
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login; 