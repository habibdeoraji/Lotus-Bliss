import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Express Shipping',
      price: 99.99,
      quantity: 1,
      weight: 5, // in kg
      destination: 'USA'
    },
    {
      id: 2,
      name: 'Standard Delivery',
      price: 49.99,
      quantity: 2,
      weight: 3,
      destination: 'Canada'
    }
  ]);

  const [shippingRates, setShippingRates] = useState({
    standard: 10,
    express: 25
  });

  const [selectedShipping, setSelectedShipping] = useState('standard');

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  // Calculate shipping cost based on total weight and destination
  const calculateShippingCost = () => {
    const totalWeight = cartItems.reduce((acc, item) => acc + (item.weight * item.quantity), 0);
    const baseRate = shippingRates[selectedShipping];
    return baseRate * Math.ceil(totalWeight / 5); // $10 per 5kg
  };

  const shippingCost = calculateShippingCost();
  const total = subtotal + shippingCost;

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cart-page"
    >
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="destination">Shipping to: {item.destination}</p>
                  </div>
                  
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                  
                  <div className="price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button 
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            <div className="shipping-options">
              <h2>Shipping Method</h2>
              <div className="shipping-choices">
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={selectedShipping === 'standard'}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                  />
                  Standard Shipping (${shippingRates.standard})
                </label>
                <label>
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={selectedShipping === 'express'}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                  />
                  Express Shipping (${shippingRates.express})
                </label>
              </div>
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <Link to="/products" className="continue-shopping">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="checkout-button">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Cart; 