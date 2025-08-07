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

  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

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
    <section
      id="contact"
      className="py-16 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2
          id="contact-heading"
          className="text-4xl font-bold text-green-700 text-center"
        >
          {t("contact.heading")}
        </h2>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("contact.subheading")}
        </p>

        {/* Contact Details */}
        <address
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center not-italic"
          aria-label="Contact information"
        >
          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handlePhoneClick}
            aria-label={`Call us at ${phoneNumber}`}
          >
            <FaPhoneAlt className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.phone")}</h4>
            <p className="text-gray-600">{phoneNumber}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handleEmailClick}
            aria-label={`Send an email to ${emailAddress}`}
          >
            <FaEnvelope className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.email")}</h4>
            <p className="text-gray-600">{emailAddress}</p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={handleLocationClick}
            aria-label={`View our location in ${locationAddress}`}
          >
            <FaMapMarkerAlt className="text-green-700 text-3xl mx-auto mb-2" />
            <h4 className="text-lg font-semibold">{t("contact.location")}</h4>
            <p className="text-gray-600">{locationAddress}</p>
          </div>
        </address>

        {/* Contact Form */}
        <div
          className="mt-12 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          aria-label="Contact form section"
        >
          <h3 className="text-2xl font-semibold text-center text-green-700">
            {t("contact.form_title")}
          </h3>

          <form onSubmit={handleSubmit} className="mt-6" noValidate>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                {t("contact.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                aria-required="true"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.name_placeholder")}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="mobile"
                className="block text-gray-700 font-medium"
              >
                {t("contact.mobile")}
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                autoComplete="tel"
                aria-required="true"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.mobile_placeholder")}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                {t("contact.message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder={t("contact.message_placeholder")}
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
              aria-label="Submit contact form"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {successMessage && (
              <p className="mt-4 text-green-600 text-center" role="alert">
                {successMessage}
              </p>
            )}

            {errorMessage && (
              <p className="mt-4 text-red-600 text-center" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
