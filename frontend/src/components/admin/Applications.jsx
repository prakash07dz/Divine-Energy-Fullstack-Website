import { useEffect, useState } from "react";
import axios from "axios";
import {
  FiSearch,
  FiFilter,
  FiEye,
  FiCheck,
  FiX,
  FiClock,
  FiTrash,
} from "react-icons/fi";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch applications
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
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const updateApplicationStatus = async (id, status) => {
    try {
      const response = await axios.put(
        `https://devine-energy-fullstack-website-backend.onrender.com/api/documents/${id}`,
        { status },
        {
          headers: { Authorization: localStorage.getItem("adminToken") },
        }
      );
      console.log("Updated Response:", response.data);

      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: status } : app))
      );
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  const deleteApplication = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this application?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(
        `https://devine-energy-fullstack-website-backend.onrender.com/api/documents/${id}`,
        {
          headers: { Authorization: localStorage.getItem("adminToken") },
        }
      );

      setApplications((prev) => prev.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const filteredApplications = applications.filter(
    (app) =>
      app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus ? app.status === filterStatus : true)
  );

  const openDetailsModal = (app) => {
    setSelectedApplication(app);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Applications</h2>

      {/* Search & Filter */}
      <div className="flex flex-wrap gap-4 mb-4">
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
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr
                key={app._id}
                className="border hover:bg-gray-50 transition-colors"
              >
                <td className="border p-3">{app.fullName}</td>
                <td className="border p-3">{app.mobileNumber}</td>
                <td className="border p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : app.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="border p-3 flex justify-center gap-3">
                  {/* View Details */}
                  <button
                    onClick={() => openDetailsModal(app)}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                    title="View Details"
                  >
                    <FiEye />
                  </button>

                  {/* Approve */}
                  <button
                    onClick={() => updateApplicationStatus(app._id, "Approved")}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
                    title="Approve"
                  >
                    <FiCheck />
                  </button>

                  {/* Reject */}
                  <button
                    onClick={() => updateApplicationStatus(app._id, "Rejected")}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                    title="Reject"
                  >
                    <FiX />
                  </button>

                  {/* Mark as Pending */}
                  <button
                    onClick={() => updateApplicationStatus(app._id, "Pending")}
                    className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
                    title="Mark as Pending"
                  >
                    <FiClock />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteApplication(app._id)}
                    className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition-colors"
                    title="Delete"
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Application Details</h3>

            {/* Details Section */}
            <div className="space-y-4">
              <p>
                <strong>Full Name:</strong> {selectedApplication.fullName}
              </p>
              <p>
                <strong>Mobile Number:</strong>{" "}
                {selectedApplication.mobileNumber}
              </p>
              {/* Uploaded Documents */}
              <div>
                <strong>Uploaded Documents:</strong>
                <div className="mt-2">
                  {selectedApplication.aadharCard ? (
                    <a
                      href={selectedApplication.aadharCard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Aadhar Card
                    </a>
                  ) : null}

                  {selectedApplication.panCard ? (
                    <a
                      href={selectedApplication.panCard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Pan Card
                    </a>
                  ) : null}

                  {selectedApplication.electricityBill ? (
                    <a
                      href={selectedApplication.electricityBill}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Electricity Bill
                    </a>
                  ) : null}

                  {selectedApplication.taxReceipt ? (
                    <a
                      href={selectedApplication.taxReceipt}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Tax Recipt
                    </a>
                  ) : null}

                  {selectedApplication.passportPhoto ? (
                    <a
                      href={selectedApplication.passportPhoto}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Passport Photo
                    </a>
                  ) : null}

                  {selectedApplication.cancelledCheque ? (
                    <a
                      href={selectedApplication.cancelledCheque}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline block"
                    >
                      Cancelled Cheque
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Applications;
