import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplySubsidy = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    files: {},
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      files: { ...prev.files, [name]: files[0] },
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Full Name must contain only letters and spaces.";
    }

    // Validate Mobile Number
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
    }

    // Validate Files
    const requiredFiles = [
      "aadharCard",
      "panCard",
      "electricityBill",
      "cancelledCheque",
      "taxReceipt",
      "passportPhoto",
    ];
    requiredFiles.forEach((file) => {
      if (!formData.files[file]) {
        newErrors[file] = "This file is required.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("mobileNumber", formData.mobileNumber);

    Object.keys(formData.files).forEach((key) => {
      formDataToSend.append(key, formData.files[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message);
      navigate("/");
      setFormData({ fullName: "", mobileNumber: "", files: {} });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to upload documents");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
          Apply for Government Subsidy
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.fullName ? "border-red-500" : ""
              }`}
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.mobileNumber ? "border-red-500" : ""
              }`}
              required
            />
            {errors.mobileNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          {/* File Uploads */}
          {[
            "aadharCard",
            "panCard",
            "electricityBill",
            "cancelledCheque",
            "taxReceipt",
            "passportPhoto",
          ].map((name) => (
            <div key={name}>
              <label className="block font-medium capitalize">
                {name.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <div className="flex items-center space-x-2">
                <label className="bg-green-400 text-black py-2 px-4 rounded-lg cursor-pointer hover:bg-green-500 transition">
                  Choose File
                  <input
                    type="file"
                    name={name}
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
                <span className="text-gray-700 text-sm">
                  {formData.files[name]
                    ? formData.files[name].name
                    : "No file chosen"}
                </span>
              </div>
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplySubsidy;
