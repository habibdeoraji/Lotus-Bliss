import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

const contactBg = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-page"
      style={{
        '--contact-bg-image': `url(${contactBg})`
      }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We're here to help with your shipping needs</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  />
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="support-channels">
                <h2>Get in Touch</h2>
                <div className="channel">
                  <FaPhone className="icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="channel">
                  <FaEnvelope className="icon" />
                  <div>
                    <h3>Email</h3>
                    <p>support@globalsphere.com</p>
                  </div>
                </div>
                <div className="channel">
                  <FaComments className="icon" />
                  <div>
                    <h3>Live Chat</h3>
                    <p>Available 24/7</p>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact; 