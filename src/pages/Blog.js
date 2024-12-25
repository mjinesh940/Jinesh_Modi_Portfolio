import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { title: 'Understanding React Hooks', date: 'Oct 10, 2023' },
    { title: 'Spring Boot Microservices', date: 'Sep 20, 2023' },
    { title: 'Building Scalable APIs', date: 'Aug 15, 2023' }
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.map((post, index) => (
          <li key={index} className="blog-item">
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-date">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;