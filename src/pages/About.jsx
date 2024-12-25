import { motion } from 'framer-motion';
import { FaGlobeAsia, FaHandHoldingHeart, FaAward } from 'react-icons/fa';

const aboutBg = 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80';
const worldMap = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Simple_world_map.svg/2000px-Simple_world_map.svg.png';

const About = () => {
  const achievements = [
    {
      year: 2015,
      title: 'Lotus Bliss Founded',
      description: 'Started our journey to bring India\'s ancient superfood to the world'
    },
    {
      year: 2017,
      title: 'Sustainable Sourcing',
      description: 'Established direct partnerships with traditional farmers in Bihar'
    },
    {
      year: 2019,
      title: 'Innovation Award',
      description: 'Honored for preserving traditional methods while innovating for modern lifestyles'
    },
    {
      year: 2021,
      title: 'Global Wellness Award',
      description: 'Recognized for bringing sustainable, healthy snacking to global markets'
    },
    {
      year: 2023,
      title: 'Zero Waste Achievement',
      description: 'Implemented fully sustainable practices from farm to package'
    }
  ];

  const values = [
    {
      icon: <FaGlobeAsia />,
      title: 'Ancient Wisdom',
      description: 'Preserving centuries-old cultivation methods from Bihar, India'
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Farmer Partnership',
      description: 'Supporting traditional farming communities through fair trade practices'
    },
    {
      icon: <FaAward />,
      title: 'Premium Quality',
      description: 'Rigorous quality control from harvest to packaging'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about-page"
      style={{
        '--about-bg-image': `url(${aboutBg})`
      }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Journey to a Healthier You</h1>
          <p>Bringing India's ancient superfood wisdom to modern snacking</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At Lotus Bliss, we're on a mission to share the incredible benefits of makhana,
            a treasured superfood that has been cherished in Indian wellness traditions for
            centuries. By partnering directly with traditional farmers in Bihar, we ensure
            both the authenticity of our products and the sustainability of ancient farming
            practices while bringing this nutritious snack to health-conscious consumers worldwide.
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.title} className="value-card">
                <div className="icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-section">
        <div className="container">
          <h2>Our Heritage</h2>
          <div className="heritage-content">
            <div className="heritage-text">
              <p>
                Makhana, also known as fox nuts or lotus seeds, has been an integral
                part of traditional Indian cuisine and Ayurvedic medicine for thousands
                of years. These precious seeds are harvested from lotus flowers that
                grow in the ponds of Bihar, India, where traditional farming methods
                have been passed down through generations.
              </p>
              <p>
                At Lotus Bliss, we work directly with skilled farmers who use these
                time-honored techniques to cultivate and harvest the finest quality
                makhana. Our commitment to preserving these traditional methods while
                innovating for modern convenience has made us a leader in bringing
                this ancient superfood to health-conscious consumers worldwide.
              </p>
            </div>
            <div className="heritage-image">
              <img src="https://images.unsplash.com/photo-1589233160947-1202d378f452" alt="Traditional Makhana Farming" />
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Global Impact</h2>
          <p className="section-intro">
            From the pristine waters of Bihar to health-conscious consumers worldwide,
            we're creating a sustainable impact at every step of our journey.
          </p>
          <div className="map-container">
            <img 
              src={worldMap}
              alt="Global Operations Map"
              className="operations-map"
            />
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <h2>Our Journey</h2>
          <p className="section-intro">
            Every step we take is guided by our commitment to quality, sustainability,
            and the well-being of our community.
          </p>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.year} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 