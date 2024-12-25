import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

const Checkout = () => {
  const [formData, setFormData] = useState({
    // Billing Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    // Shipping Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Payment Info
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [sameAsBilling, setSameAsBilling] = useState(true);

  // Mock order summary data (should come from cart state)
  const orderSummary = {
    subtotal: 199.98,
    shipping: 20.00,
    tax: 21.99,
    total: 241.97
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
    console.log('Order submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="checkout-page"
    >
      <div className="checkout-container">
        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2>Billing Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={sameAsBilling}
                    onChange={() => setSameAsBilling(!sameAsBilling)}
                  />
                  Same as billing address
                </label>
              </div>
              {!sameAsBilling && (
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="address">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      {/* Add more countries */}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="form-section">
              <h2>Payment Information</h2>
              <div className="secure-badge">
                <FaLock /> Secure Payment
              </div>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="place-order-button">
              Place Order
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>${orderSummary.shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${orderSummary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout; 