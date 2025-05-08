import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://devine-energy-fullstack-website-backend.onrender.com/api/blogs"
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          {t("blog.heading")}
        </h2>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("blog.subheading")}
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(showAll ? blogs : blogs.slice(0, 3)).map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm">
                  <FaRegCalendarAlt className="mr-2" />
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h3 className="mt-2 text-xl font-semibold text-green-700">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mt-2 line-clamp-2">
                  {blog.content.substring(0, 100)}...
                </p>

                <Link
                  to={`/blog/${blog._id}`}
                  className="mt-4 inline-block text-green-600 font-semibold hover:underline"
                >
                  {t("blog.read_more")} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {blogs.length > 3 && !showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition duration-300"
            >
              {t("blog.read_more_blogs")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
