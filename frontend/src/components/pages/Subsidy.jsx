import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Subsidy = () => {
  const { t } = useTranslation();

  return (
    <section id="subsidy" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          {t("subsidy_title")}
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          {t("subsidy_description", { schemeName: t("scheme_name") })}
        </p>

        {/* Document List */}
        <div className="mt-6 bg-white shadow-lg rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            {t("required_documents")}
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-none">
            {t("document_list", { returnObjects: true }).map((doc, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">✔</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solar Benefits Section */}
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            {t("benefits_title")}
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg list-none">
            {t("benefits_list", { returnObjects: true }).map(
              (benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-yellow-500 text-xl">🔹</span>
                  <span>{benefit}</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            to="/apply-subsidy"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            {t("apply_button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Subsidy;
