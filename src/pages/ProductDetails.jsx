import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeart, FaCheck, FaSeedling, FaShieldAlt } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('100g');

  // Mock product data (replace with actual data from your backend)
  const product = {
    id,
    name: 'Classic Himalayan Makhana',
    tagline: 'Pure, Premium, and Perfectly Healthy',
    description: 'Hand-harvested from the pristine lakes of Bihar, our classic makhana offers a perfect blend of nutrition and natural goodness.',
    price: {
      '100g': 199,
      '250g': 449,
      '500g': 849
    },
    images: [
      'https://images.unsplash.com/photo-1612437118782-4873438f0d1d?auto=format&fit=crop&q=80',
      // Add more product images
    ],
    nutrition: {
      protein: '9.7g',
      fat: '0.1g',
      carbs: '76.9g',
      fiber: '14.5g',
      calories: '347',
      servingSize: '100g'
    },
    benefits: [
      {
        icon: <FaLeaf />,
        title: '100% Natural',
        description: 'Pure lotus seeds with no artificial additives'
      },
      {
        icon: <FaHeart />,
        title: 'Heart Healthy',
        description: 'Low in cholesterol and sodium'
      },
      {
        icon: <FaSeedling />,
        title: 'Sustainably Sourced',
        description: 'Supporting local farmers in Bihar'
      },
      {
        icon: <FaShieldAlt />,
        title: 'Quality Assured',
        description: 'Rigorous testing for premium quality'
      }
    ],
    usageRecommendations: [
      'Perfect for mindful snacking',
      'Ideal post-workout protein boost',
      'Healthy tea-time companion',
      'Midnight craving solution'
    ]
  };

  const handleAddToCart = () => {
    // Implement cart functionality
    console.log(`Added ${selectedSize} to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="product-details-page"
    >
      <div className="container">
        <div className="product-grid">
          <div className="product-gallery">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="product-info">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {product.name}
            </motion.h1>
            <motion.p
              className="tagline"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {product.tagline}
            </motion.p>
            <motion.p
              className="description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.description}
            </motion.p>

            <div className="size-selection">
              <h3>Choose Size</h3>
              <div className="size-options">
                {Object.keys(product.price).map((size) => (
                  <button
                    key={size}
                    className={`size-button ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="price">
              ₹{product.price[selectedSize]}
              <span className="per-unit">per pack</span>
            </div>

            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>

        <section className="nutrition-section">
          <h2>Nutritional Information</h2>
          <div className="nutrition-grid">
            {Object.entries(product.nutrition).map(([key, value]) => (
              <div key={key} className="nutrition-item">
                <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Lotus Bliss?</h2>
          <div className="benefits-grid">
            {product.benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className="benefit-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="usage-section">
          <h2>Recommended Uses</h2>
          <div className="usage-grid">
            {product.usageRecommendations.map((usage, index) => (
              <div key={index} className="usage-item">
                <FaCheck className="check-icon" />
                <p>{usage}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ProductDetails; 