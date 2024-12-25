import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Signup submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="auth-page"
    >
      <div className="auth-container">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Join the Lotus Bliss community</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <div className="input-icon">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaEnvelope />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
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
            />
          </div>

          <div className="form-group">
            <div className="input-icon">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup; 