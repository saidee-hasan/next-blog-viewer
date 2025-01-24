"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllPosts } from "../utils/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const postsPerPage = 12; // Number of posts per page (changed to 12)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await fetchAllPosts();
        setBlogs(data);
      } catch (error) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg font-semibold p-4">{error}</div>;
  }

  // Calculate the indices for slicing the blogs array
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Popular Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPosts.map((blog, index) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300"
          >
            {/* Card Header */}
            <div className="relative">
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Popular
              </span>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{blog.body.substring(0, 120)}...</p>

              <div className="flex items-center justify-between">
                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69L9.05 2.927z" />
                  </svg>
                  <span className="text-sm font-medium">4.5</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8">
        {/* Previous Button */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-6 py-2 bg-gray-300 text-gray-600 rounded-md mr-4 hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Number Display */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium">Page {currentPage}</span>
          <span className="text-lg font-medium">of {totalPages}</span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-6 py-2 bg-gray-300 text-gray-600 rounded-md ml-4 hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
