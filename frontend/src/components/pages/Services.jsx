import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      imgSrc: "/images/services/residential.avif",
      title: t("residential_solar"),
      description: t("residential_desc"),
      alt: "Residential Solar Panel Installation",
    },
    {
      id: 2,
      imgSrc: "/images/services/commercial.webp",
      title: t("commercial_solar"),
      description: t("commercial_desc"),
      alt: "Commercial Solar Panel System",
    },
    {
      id: 3,
      imgSrc: "/images/services/industrial.webp",
      title: t("industrial_solar"),
      description: t("industrial_desc"),
      alt: "Industrial Solar Energy Solution",
    },
    {
      id: 4,
      imgSrc: "/images/services/solar-farm.avif",
      title: t("solar_farms"),
      description: t("solar_farms_desc"),
      alt: "Solar Farm Infrastructure",
    },
    {
      id: 5,
      imgSrc: "/images/services/installation.avif",
      title: t("solar_installation"),
      description: t("solar_installation_desc"),
      alt: "Solar Installation Services",
    },
    {
      id: 6,
      imgSrc: "/images/services/maintenance.avif",
      title: t("maintenance_support"),
      description: t("maintenance_support_desc"),
      alt: "Solar Panel Maintenance and Support",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center">
          <h2
            id="services-heading"
            className="text-4xl font-bold text-green-700"
          >
            {t("our_services")}
          </h2>
          <p className="mt-2 text-lg text-gray-700">{t("services_intro")}</p>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
              aria-label={service.title}
            >
              <img
                src={service.imgSrc}
                alt={service.alt}
                loading="lazy"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-green-700">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
