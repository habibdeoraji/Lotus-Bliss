import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLeaf, FaDumbbell, FaHeart, FaShieldAlt } from 'react-icons/fa';
import FlavorFinder from '../components/FlavorFinder';
import Blog from '../components/Blog';

const heroBg = 'https://images.unsplash.com/photo-1612437118782-4873438f0d1d?auto=format&fit=crop&q=80';

const Home = () => {
  const benefits = [
    {
      icon: <FaDumbbell />,
      title: 'High Protein',
      description: 'Supports muscle growth and recovery'
    },
    {
      icon: <FaLeaf />,
      title: 'Low Calorie',
      description: 'Perfect for mindful weight management'
    },
    {
      icon: <FaHeart />,
      title: 'Gluten-Free',
      description: 'Ideal for a healthy lifestyle'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Rich in Antioxidants',
      description: 'Boosts immunity and wellness'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Fitness Enthusiast',
      quote: 'Lotus Bliss makhana has become my go-to healthy snack. Perfect for post-workout!'
    },
    {
      name: 'Dr. James Chen',
      role: 'Nutritionist',
      quote: 'I recommend Lotus Bliss to my clients. It\'s a nutrient-rich alternative to processed snacks.'
    },
    {
      name: 'Emma K.',
      role: 'Yoga Instructor',
      quote: 'Clean, pure, and delicious. Lotus Bliss aligns perfectly with my wellness journey.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-page"
      style={{
        '--hero-bg-image': `url(${heroBg})`
      }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nourishment in Every Bite
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Rich in protein, low in calories, and packed with antioxidants
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/products" className="primary-button">
              Explore Flavors
            </Link>
            <Link to="/benefits" className="secondary-button">
              Discover Health Benefits
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Nature's Perfect Snack</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="quote">{testimonial.quote}</div>
                <div className="author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FlavorFinder />

      <Blog />

      <section className="cta-section">
        <div className="container">
          <h2>Experience the Lotus Bliss Difference</h2>
          <p>Join thousands of health-conscious individuals who've made the switch to premium makhana snacks</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home; 