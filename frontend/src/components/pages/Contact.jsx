import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const phoneNumber = "+916354051676";
  const emailAddress = "info@divineenergy.com";
  const locationAddress = "Palanpur, Gujarat, India";

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateMobile = (mobile) => {
    return /^\d{10}$/.test(mobile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.message) {
      setErrorMessage(t("contact.alert"));
      return;
    }

    if (!validateMobile(formData.mobile)) {
      setErrorMessage("Mobile number must be exactly 10 digits.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        "https://devine-energy-fullstack-website-backend.onrender.com/api/contact",
        formData
      );
      setSuccessMessage(t("contact.success"));
      setFormData({ name: "", mobile: "", message: "" });
      setErrorMessage("");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      setErrorMessage("Failed to send message. Try again later.", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLocationClick = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      locationAddress
    )}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          {t("contact.heading")}
        </h2>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("contact.subheading")}
        </p>

        {/* Contact Details */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handlePhoneClick}
          >
            <FaPhoneAlt className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.phone")}</h4>
            <p className="text-gray-600">{phoneNumber}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handleEmailClick}
          >
            <FaEnvelope className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.email")}</h4>
            <p className="text-gray-600">{emailAddress}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handleLocationClick}
          >
            <FaMapMarkerAlt className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.location")}</h4>
            <p className="text-gray-600">{locationAddress}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center text-green-700">
            {t("contact.form_title")}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                {t("contact.name")}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.name_placeholder")}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                {t("contact.mobile")}
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.mobile_placeholder")}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                {t("contact.message")}
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.message_placeholder")}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full font-semibold py-2 rounded-lg transition-all ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-700 hover:bg-green-800 text-white"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {successMessage && (
              <p className="mt-4 text-green-600 text-center">
                {successMessage}
              </p>
            )}

            {errorMessage && (
              <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
