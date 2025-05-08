import { useEffect, useState } from "react";
import axios from "axios";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "https://devine-energy-fullstack-website-backend.onrender.com/api/contact"
        );
        setMessages(response.data);
      } catch (error) {
        setError("Failed to fetch messages. Please try again later.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  // ✅ Delete Message
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    try {
      await axios.delete(
        `https://devine-energy-fullstack-website-backend.onrender.com/api/contact/${id}`
      );
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      alert("Failed to delete message. Try again.", error);
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        User Messages
      </h2>

      {loading && <p className="text-gray-700">Loading messages...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {messages.length === 0 ? (
        <p className="text-gray-700">No messages received yet.</p>
      ) : (
        <>
          {/* Table for Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="py-2 px-4 text-left">#</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Mobile</th>
                  <th className="py-2 px-4 text-left">Message</th>
                  <th className="py-2 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={msg._id} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{msg.name}</td>
                    <td className="py-2 px-4">{msg.mobile}</td>
                    <td className="py-2 px-4">{msg.message}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleDelete(msg._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards for Mobile */}
          <div className="md:hidden space-y-4">
            {messages.map((msg, index) => (
              <div
                key={msg._id}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold">#{index + 1}</p>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
                <p>
                  <span className="font-medium">Name:</span> {msg.name}
                </p>
                <p>
                  <span className="font-medium">Mobile:</span> {msg.mobile}
                </p>
                <p>
                  <span className="font-medium">Message:</span> {msg.message}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
