import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Lotus Bliss
          </motion.span>
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/benefits" className={isActive('/benefits') ? 'active' : ''}>
            Benefits
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About Us
          </Link>
          <Link to="/products" className={isActive('/products') ? 'active' : ''}>
            Products
          </Link>
          <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>
            Blog
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="auth-link">
            Login
          </Link>
          <Link to="/signup" className="auth-link btn btn-primary">
            Sign Up
          </Link>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 