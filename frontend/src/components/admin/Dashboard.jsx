import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiSearch, FiFilter, FiMenu, FiX } from "react-icons/fi";
import Applications from "./Applications";
import Blogs from "./Blogs";
import Messages from "./Message";
import Settings from "./Settings";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "https://devine-energy-fullstack-website-backend.onrender.com/api/documents",
          {
            headers: { Authorization: localStorage.getItem("adminToken") },
          }
        );
        setApplications(response.data);
        setError("");
      } catch (error) {
        console.error("Error fetching applications:", error);
        setError("Failed to fetch applications. Please try again later.");
      }
    };

    fetchApplications();
  }, []);

  // Automatically close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  // Filter applications based on search term and status
  const filteredApplications = applications.filter((app) => {
    return (
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus ? app.status === filterStatus : true)
    );
  });

  // Render active section
  const renderSection = () => {
    switch (activeSection) {
      case "Applications":
        return <Applications />;
      case "Blogs":
        return <Blogs />;
      case "Messages":
        return <Messages />;
      case "Settings":
        return <Settings />;
      default:
        return (
          <>
            <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-500 p-4 rounded-lg text-white shadow-lg">
                <p className="text-lg font-semibold">Total Applications</p>
                <p className="text-2xl">{applications.length}</p>
              </div>
              <div className="bg-yellow-500 p-4 rounded-lg text-white shadow-lg">
                <p className="text-lg font-semibold">Pending</p>
                <p className="text-2xl">
                  {
                    applications.filter((app) => app.status === "Pending")
                      .length
                  }
                </p>
              </div>
              <div className="bg-green-500 p-4 rounded-lg text-white shadow-lg">
                <p className="text-lg font-semibold">Approved</p>
                <p className="text-2xl">
                  {
                    applications.filter((app) => app.status === "Approved")
                      .length
                  }
                </p>
              </div>
              <div className="bg-red-500 p-4 rounded-lg text-white shadow-lg">
                <p className="text-lg font-semibold">Rejected</p>
                <p className="text-2xl">
                  {
                    applications.filter((app) => app.status === "Rejected")
                      .length
                  }
                </p>
              </div>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center bg-white border p-2 rounded-md shadow">
                <FiSearch className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search by name..."
                  className="outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center bg-white border p-2 rounded-md shadow">
                <FiFilter className="text-gray-500 mr-2" />
                <select
                  className="outline-none"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Applications Table */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border p-3 text-left">Name</th>
                    <th className="border p-3 text-left">Mobile</th>
                    <th className="border p-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app) => (
                    <tr key={app._id} className="border">
                      <td className="border p-3">{app.fullName}</td>
                      <td className="border p-3">{app.mobileNumber}</td>
                      <td className="border p-3">{app.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 space-y-6 transition-transform duration-300 md:relative md:translate-x-0`}
      >
        {sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <FiX size={24} />
          </button>
        )}

        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="space-y-3">
          <button
            className={`block py-2 px-3 w-full text-left rounded ${
              activeSection === "" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveSection("");
              setSidebarOpen(false);
            }}
          >
            Dashboard
          </button>
          <button
            className={`block py-2 px-3 w-full text-left rounded ${
              activeSection === "Applications"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveSection("Applications");
              setSidebarOpen(false);
            }}
          >
            Applications
          </button>
          <button
            className={`block py-2 px-3 w-full text-left rounded ${
              activeSection === "Blogs" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveSection("Blogs");
              setSidebarOpen(false);
            }}
          >
            Blogs
          </button>
          <button
            className={`block py-2 px-3 w-full text-left rounded ${
              activeSection === "Messages" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveSection("Messages");
              setSidebarOpen(false);
            }}
          >
            Messages
          </button>
          <button
            className={`block py-2 px-3 w-full text-left rounded ${
              activeSection === "Settings" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
            onClick={() => {
              setActiveSection("Settings");
              setSidebarOpen(false);
            }}
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            <FiLogOut className="mr-2" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-2 overflow-y-auto">
        <button
          className="md:hidden bg-gray-800 text-white p-2 rounded mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu size={24} />
        </button>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
