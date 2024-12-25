import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/Products/ProductCard';
import Newsletter from '../components/Newsletter';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'plain', name: 'Plain Makhana' },
    { id: 'flavored', name: 'Flavored' },
    { id: 'organic', name: 'Organic' },
    { id: 'gift-packs', name: 'Gift Packs' }
  ];

  const products = [
    {
      id: 1,
      name: 'Classic Plain Makhana',
      price: 9.99,
      oldPrice: 12.99,
      image: 'https://images.unsplash.com/photo-1612437118782-4873438f0d1d?auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 128,
      description: 'Premium quality plain lotus seeds, perfect for healthy snacking.',
      isOrganic: true,
      category: 'plain'
    },
    {
      id: 2,
      name: 'Spicy Peri-Peri Makhana',
      price: 7.99,
      oldPrice: 9.99,
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 95,
      description: 'Spicy and flavorful lotus seeds with a perfect kick of peri-peri.',
      isNew: true,
      category: 'flavored'
    },
    {
      id: 3,
      name: 'Organic Premium Makhana',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1589233160947-1202d378f452?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviewCount: 156,
      description: 'Certified organic lotus seeds sourced from pristine waters.',
      isOrganic: true,
      category: 'organic'
    },
    {
      id: 4,
      name: 'Caramel Crunch Makhana',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1612487439081-910e67ee6078?auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 82,
      description: 'Sweet and crunchy lotus seeds with a delightful caramel coating.',
      isNew: true,
      category: 'flavored'
    },
    {
      id: 5,
      name: 'Festival Gift Pack',
      price: 24.99,
      oldPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviewCount: 45,
      description: 'Assorted flavors in a beautiful gift box, perfect for special occasions.',
      category: 'gift-packs'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="products-page"
    >
      <section className="hero-section">
        <div className="container">
          <h1>Our Products</h1>
          <p>Discover our range of premium makhana snacks</p>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="search-bar">
              <FaSearch />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filters">
              <FaFilter />
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.div>
  );
};

export default Products; 