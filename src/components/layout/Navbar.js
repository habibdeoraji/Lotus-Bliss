import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Lotus Bliss
          </motion.span>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <AnimatePresence>
          <motion.div 
            className={`nav-content ${isOpen ? 'open' : ''}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="nav-links">
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/benefits" 
                className={isActive('/benefits') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Benefits
              </Link>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'active' : ''} 
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Link 
                to="/products" 
                className={isActive('/products') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link 
                to="/blog" 
                className={isActive('/blog') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            <div className="nav-actions">
              <Link to="/login" className="auth-link" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/signup" className="auth-link btn btn-primary" onClick={closeMenu}>
                Sign Up
              </Link>
              <Link to="/cart" className="cart-icon" onClick={closeMenu}>
                <FaShoppingCart />
                <span className="cart-count">0</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 