import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      imgSrc: "/images/services/residential.avif",
      title: t("residential_solar"),
      description: t("residential_desc"),
    },
    {
      id: 2,
      imgSrc: "/images/services/commercial.webp",
      title: t("commercial_solar"),
      description: t("commercial_desc"),
    },
    {
      id: 3,
      imgSrc: "/images/services/industrial.webp",
      title: t("industrial_solar"),
      description: t("industrial_desc"),
    },
    {
      id: 4,
      imgSrc: "/images/services/solar-farm.avif",
      title: t("solar_farms"),
      description: t("solar_farms_desc"),
    },
    {
      id: 5,
      imgSrc: "/images/services/installation.avif",
      title: t("solar_installation"),
      description: t("solar_installation_desc"),
    },
    {
      id: 6,
      imgSrc: "/images/services/maintenance.avif",
      title: t("maintenance_support"),
      description: t("maintenance_support_desc"),
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-green-700 text-center">
          {t("our_services")}
        </h2>
        <p className="mt-2 text-lg text-gray-700 text-center">
          {t("services_intro")}
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                loading="lazy"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-green-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
