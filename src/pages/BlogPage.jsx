import { motion } from 'framer-motion';
import Blog from '../components/Blog';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-page"
    >
      <Blog />
    </motion.div>
  );
};

export default BlogPage; 