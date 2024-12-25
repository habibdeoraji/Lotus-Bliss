import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { id, name, price, image, rating, description } = product;

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="product-image">
        <img src={image} alt={name} />
        <div className="product-badges">
          {product.isNew && <span className="badge new">New</span>}
          {product.isOrganic && <span className="badge organic">Organic</span>}
        </div>
      </div>
      
      <div className="product-content">
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? 'star filled' : 'star'}
            />
          ))}
          <span className="rating-count">({product.reviewCount})</span>
        </div>

        <h3>{name}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <div className="price">
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
            <span className="current-price">${price}</span>
          </div>
          
          <div className="product-actions">
            <Link to={`/products/${id}`} className="btn btn-secondary">
              View Details
            </Link>
            <button className="btn btn-primary cart-btn">
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 