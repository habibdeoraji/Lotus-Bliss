import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaUser } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Reasons Makhana is the Perfect Yoga Snack',
      excerpt: 'Discover why health enthusiasts and yoga practitioners are making makhana their go-to snack for mindful eating.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
      author: 'Priya Sharma',
      readTime: '5 min read',
      category: 'Wellness'
    },
    {
      id: 2,
      title: 'How to Replace Chips with Healthy Alternatives',
      excerpt: "Learn how to satisfy your snack cravings with nutritious options that don't compromise on taste.",
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087',
      author: 'Dr. Mark Chen',
      readTime: '7 min read',
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'The Ancient History of Makhana',
      excerpt: 'Explore the fascinating journey of makhana from traditional medicine to modern superfood.',
      image: 'https://images.unsplash.com/photo-1589233160947-1202d378f452',
      author: 'Raj Patel',
      readTime: '6 min read',
      category: 'Culture'
    }
  ];

  return (
    <motion.div
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h2 className="section-title">Wellness & Wisdom</h2>
        <p className="section-intro">
          Explore our collection of articles on health, wellness, and the ancient wisdom
          of traditional superfoods.
        </p>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="meta">
                  <span className="author">
                    <FaUser /> {post.author}
                  </span>
                  <span className="read-time">
                    <FaClock /> {post.readTime}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More <FaArrowRight />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="blog-cta">
          <Link to="/blog" className="btn btn-primary">
            View All Articles
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog; 