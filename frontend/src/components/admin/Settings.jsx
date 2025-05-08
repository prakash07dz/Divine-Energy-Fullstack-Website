import react from "react";

const Settings = () => {

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Admin Settings</h2>
      <p className="text-gray-600 mb-6">
        This section will allow admins to update settings.
      </p>

      {/* Admin Account Management */}
      <div className="bg-white p-4 mb-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Admin Account Management</h3>
        <button className="text-blue-500">Change Password</button>
        <button className="ml-4 text-blue-500">Update Profile</button>
      </div>

      {/* Website Settings */}
      <div className="bg-white p-4 mb-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Website Settings</h3>
        <div>
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Update company name"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Contact Information</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Update contact information"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Homepage Content</label>
          <textarea
            className="w-full p-2 mt-2 border rounded"
            rows="4"
            placeholder="Update homepage content"
          />
        </div>
      </div>

      {/* Subsidy Configurations */}
      <div className="bg-white p-4 mb-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Subsidy Configurations</h3>
        <div>
          <label className="block text-gray-700">Eligibility Criteria</label>
          <textarea
            className="w-full p-2 mt-2 border rounded"
            rows="4"
            placeholder="Set eligibility criteria"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Subsidy Amount</label>
          <input
            type="number"
            className="w-full p-2 mt-2 border rounded"
            placeholder="Set subsidy amount"
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Document Requirements</label>
          <textarea
            className="w-full p-2 mt-2 border rounded"
            rows="4"
            placeholder="Set document requirements"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
