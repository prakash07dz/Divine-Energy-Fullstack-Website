import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://devine-energy-fullstack-website-backend.onrender.com/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          <div className="flex items-center text-gray-600 text-sm">
            <FaRegCalendarAlt className="mr-2" />
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <h2 className="mt-4 text-3xl font-bold text-green-700">
            {blog.title}
          </h2>

          <p className="text-gray-700 mt-4">{blog.content}</p>

          {/* Back to Blog Page */}
          <div className="mt-6">
            <Link
              to="/"
              className="text-green-600 font-semibold hover:underline"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
