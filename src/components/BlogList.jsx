"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchAllPosts } from '../utils/api';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchAllPosts();
        setBlogs(data);
      } catch (error) {
        setError('Failed to load blogs');
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message if an error occurs
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="border p-4 rounded shadow">
          <h3 className="text-lg font-bold">{blog.title}</h3>
          <Link href={`/blog/${blog.id}`}>
            <span className="text-blue-600 hover:underline cursor-pointer">Read More</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
