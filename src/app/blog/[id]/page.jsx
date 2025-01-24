"use client"; // Marking this file as a client component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetailPage = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const [post, setPost] = useState(null); // State to store the blog post
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          if (!response.ok) {
            throw new Error("Failed to fetch post");
          }
          const data = await response.json();
          setPost(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-xl text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-600">
          <p className="text-xl">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-xl text-gray-600">No post found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">{post.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;
