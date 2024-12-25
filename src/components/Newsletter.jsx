import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus({
        type: 'success',
        message: 'Thank you for subscribing! Check your email for confirmation.'
      });
      setEmail('');
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="newsletter-content"
        >
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter for exclusive offers, wellness tips, and
            new product announcements.
          </p>

          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
              />
              <button 
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading-spinner" />
                ) : (
                  <>
                    <FaPaperPlane /> Subscribe
                  </>
                )}
              </button>
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`status-message ${status.type}`}
              >
                {status.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 