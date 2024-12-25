import { motion } from 'framer-motion';
import { 
  FaHeartbeat,
  FaBrain,
  FaWeight,
  FaSeedling,
  FaLeaf,
  FaAppleAlt,
  FaCheck
} from 'react-icons/fa';

const benefitsBg = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80';

const Benefits = () => {
  const userStories = [
    {
      name: 'Maya P.',
      role: 'Fitness Coach',
      story: 'Lotus Bliss makhana has become my secret weapon for clients struggling with unhealthy snacking. It\'s nutritious, satisfying, and helps with portion control.',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110'
    },
    {
      name: 'Raj S.',
      role: 'Marathon Runner',
      story: 'As an athlete, I need snacks that provide sustained energy without weighing me down. Makhana gives me the perfect balance of nutrients.',
      image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8'
    },
    {
      name: 'Lisa C.',
      role: 'Wellness Blogger',
      story: 'I\'ve tried many healthy snacks, but Lotus Bliss makhana stands out for its versatility and incredible nutritional profile.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2'
    }
  ];

  const benefits = [
    {
      icon: <FaHeartbeat />,
      title: 'Heart Healthy',
      description: 'Low in sodium, high in magnesium for optimal cardiovascular health. Regular consumption may help maintain healthy blood pressure levels.',
      details: [
        'Magnesium supports heart rhythm',
        'Naturally low in sodium',
        'Zero cholesterol content',
        'Supports healthy blood pressure'
      ]
    },
    {
      icon: <FaWeight />,
      title: 'Weight Management',
      description: 'Feel full without the guilt. Low-calorie, high-fiber content helps control appetite and supports healthy weight management.',
      details: [
        'Only 347 calories per 100g',
        'High fiber content for satiety',
        'Perfect for portion control',
        'Satisfying crunch without guilt'
      ]
    },
    {
      icon: <FaAppleAlt />,
      title: 'Better Digestion',
      description: 'Rich in fiber for a healthy gut. Supports digestive health and promotes regular bowel movements.',
      details: [
        'High in dietary fiber',
        'Promotes gut health',
        'Aids in digestion',
        'Supports healthy metabolism'
      ]
    },
    {
      icon: <FaSeedling />,
      title: 'Nutrient Rich',
      description: 'Packed with essential nutrients including protein, minerals, and antioxidants for overall wellness.',
      details: [
        'Rich in protein (9.7g per 100g)',
        'Contains essential minerals',
        'High in antioxidants',
        'Complete protein source'
      ]
    },
    {
      icon: <FaLeaf />,
      title: 'Anti-Inflammatory',
      description: 'Natural anti-inflammatory properties help reduce oxidative stress and support overall health.',
      details: [
        'Rich in antioxidants',
        'Supports immune system',
        'Reduces oxidative stress',
        'Natural healing properties'
      ]
    },
    {
      icon: <FaAppleAlt />,
      title: 'Versatile & Convenient',
      description: 'Perfect for any time of day, from post-workout recovery to midnight snacking.',
      details: [
        'Ready to eat',
        'Perfect portion sizes',
        'Various flavors available',
        'Travel-friendly packaging'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="benefits-page"
      style={{
        '--benefits-bg-image': `url(${benefitsBg})`
      }}
    >
      <section className="hero-section">
        <div className="hero-content">
          <h1>The Superfood You've Been Missing</h1>
          <p>Discover the ancient wisdom of makhana - nature's perfect snack</p>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2>Health & Wellness Benefits</h2>
          <p className="section-intro">
            Backed by centuries of traditional wisdom and modern nutritional science,
            makhana offers a wide range of health benefits that make it the perfect
            addition to your daily wellness routine.
          </p>
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
                <ul className="benefit-details">
                  {benefit.details.map((detail, i) => (
                    <li key={i}>
                      <FaCheck className="check-icon" /> {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="stories-section">
        <div className="container">
          <h2>Success Stories</h2>
          <p className="section-intro">
            Discover how Lotus Bliss makhana has transformed snacking habits and
            supported health goals for people just like you.
          </p>
          <div className="stories-grid">
            {userStories.map((story, index) => (
              <motion.div
                key={story.name}
                className="story-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="story-image">
                  <img src={story.image} alt={story.name} />
                </div>
                <div className="story-content">
                  <h3>{story.name}</h3>
                  <p className="role">{story.role}</p>
                  <p className="quote">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Benefits; 