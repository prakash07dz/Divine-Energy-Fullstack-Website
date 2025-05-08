import { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://devine-energy-fullstack-website-backend.onrender.com/api/blogs",
          {
            headers: { Authorization: localStorage.getItem("adminToken") },
          }
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const addBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://devine-energy-fullstack-website-backend.onrender.com/api/blogs",
        newBlog,
        {
          headers: { Authorization: localStorage.getItem("adminToken") },
        }
      );
      setBlogs((prev) => [...prev, response.data]);
      setNewBlog({
        title: "",
        content: "",
        image: "",
        category: "",
      });
      setAlert({ message: "Blog created successfully!", type: "success" });
    } catch (error) {
      console.error("Error adding blog:", error);
      setAlert({
        message: "Failed to create blog. Please try again.",
        type: "error",
      });
    } finally {
      setTimeout(() => {
        setAlert({ message: "", type: "" });
      }, 3000);
    }
  };

  return (
    <div className="p-1 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Blogs Management
      </h2>

      {alert.message && (
        <div
          className={`p-3 md:p-4 mb-4 md:mb-6 rounded-md ${
            alert.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {alert.message}
        </div>
      )}

      {/* Blog Form */}
      <form
        onSubmit={addBlog}
        className="bg-white p-2 shadow-md rounded-lg space-y-3 md:space-y-1"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBlog.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newBlog.content}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="6"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newBlog.image}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newBlog.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Blogs;
