import React from 'react'
import { blogPosts } from './blogData';

const Blog = () => {
  return (
    <section className='mt-36'>
      <div className="blog-container">
      {/* <h1 className="text-4xl font-bold mb-8">Blog</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post bg-white p-6 rounded-lg shadow-md">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg"/>
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-800 mb-4">{post.excerpt}</p>
            <button className="text-blue-500 hover:underline">Read More</button>
          </div>
        ))}
      </div>
    </div>

    </section>
  );
};

export default Blog;
