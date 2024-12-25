import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaClock, FaTag } from 'react-icons/fa';

const BlogPost = () => {
  const { id } = useParams();

  // This would typically fetch from an API
  const post = {
    title: '5 Reasons Makhana is the Perfect Yoga Snack',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <h2>1. Natural Energy Boost</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <!-- Add more content -->
    `,
    author: 'Priya Sharma',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Wellness'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-post-page"
    >
      <article className="blog-post">
        <div className="container">
          <header className="post-header">
            <h1>{post.title}</h1>
            <div className="post-meta">
              <span><FaUser /> {post.author}</span>
              <span><FaClock /> {post.readTime}</span>
              <span><FaTag /> {post.category}</span>
            </div>
          </header>
          
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </motion.div>
  );
};

export default BlogPost; 