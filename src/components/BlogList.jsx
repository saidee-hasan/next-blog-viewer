// src/components/BlogList.jsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllPosts } from '../utils/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchAllPosts().then((data) => setBlogs(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <Link href={`/blog/${blog.id}`}>
            <a className="text-blue-600 hover:underline">Read More</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
