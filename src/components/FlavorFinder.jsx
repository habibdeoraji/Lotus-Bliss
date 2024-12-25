import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaFire, FaHeart, FaAppleAlt } from 'react-icons/fa';

const FlavorFinder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 'goal',
      question: "What's your primary health goal?",
      options: [
        { value: 'weight', label: 'Weight Management', icon: <FaLeaf /> },
        { value: 'energy', label: 'Energy Boost', icon: <FaFire /> },
        { value: 'heart', label: 'Heart Health', icon: <FaHeart /> },
        { value: 'wellness', label: 'General Wellness', icon: <FaAppleAlt /> }
      ]
    },
    {
      id: 'taste',
      question: 'Which flavor profile do you prefer?',
      options: [
        { value: 'spicy', label: 'Spicy & Bold' },
        { value: 'sweet', label: 'Sweet & Mild' },
        { value: 'savory', label: 'Savory & Rich' },
        { value: 'herbs', label: 'Herbal & Natural' }
      ]
    },
    {
      id: 'time',
      question: 'When do you usually snack?',
      options: [
        { value: 'morning', label: 'Morning Energy Boost' },
        { value: 'afternoon', label: 'Afternoon Pick-me-up' },
        { value: 'evening', label: 'Evening Relaxation' },
        { value: 'workout', label: 'Post-workout Recovery' }
      ]
    }
  ];

  const recommendations = {
    'weight-spicy-morning': {
      product: 'Fiery Chili Makhana',
      description: 'Kickstart your metabolism with our spicy blend',
      benefits: ['High protein', 'Metabolism boost', 'Energy enhancement']
    },
    'heart-herbs-evening': {
      product: 'Himalayan Herbs Makhana',
      description: 'Calming herbs meet heart-healthy makhana',
      benefits: ['Low sodium', 'Calming herbs', 'Heart-healthy']
    },
    // Add more combinations...
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const getRecommendation = () => {
    const key = `${answers.goal}-${answers.taste}-${answers.time}`;
    return recommendations[key] || recommendations['default'];
  };

  return (
    <motion.div 
      className="flavor-finder"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h2 className="section-title">Find Your Perfect Makhana</h2>
        <p className="section-intro">
          Answer a few questions to discover your ideal flavor match
        </p>

        {currentStep < questions.length ? (
          <div className="quiz-section">
            <div className="progress-bar">
              <div 
                className="progress" 
                style={{ width: `${(currentStep + 1) / questions.length * 100}%` }}
              />
            </div>

            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="question-card"
            >
              <h3>{questions[currentStep].question}</h3>
              <div className="options-grid">
                {questions[currentStep].options.map(option => (
                  <button
                    key={option.value}
                    className="option-card"
                    onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                  >
                    {option.icon && <div className="option-icon">{option.icon}</div>}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="recommendation-card"
          >
            <div className="recommendation-content">
              <h3>Your Perfect Match</h3>
              <div className="product-details">
                <h4>{getRecommendation().product}</h4>
                <p>{getRecommendation().description}</p>
                <ul className="benefits-list">
                  {getRecommendation().benefits.map(benefit => (
                    <li key={benefit}>
                      <FaLeaf className="benefit-icon" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentStep(0)}
              >
                Start Over
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FlavorFinder; 