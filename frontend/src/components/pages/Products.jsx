import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      image: "/images/products/solar-panel.avif",
      title: t("products.solarPanels.title"),
      description: t("products.solarPanels.description"),
    },
    {
      id: 2,
      image: "/images/products/solar-battery.webp",
      title: t("products.solarBatteries.title"),
      description: t("products.solarBatteries.description"),
    },
    {
      id: 3,
      image: "/images/products/solar-inverter.avif",
      title: t("products.solarInverters.title"),
      description: t("products.solarInverters.description"),
    },
    {
      id: 4,
      image: "/images/products/wind-turbine.jpg",
      title: t("products.windTurbines.title"),
      description: t("products.windTurbines.description"),
    },
    {
      id: 5,
      image: "/images/products/solar-light.avif",
      title: t("products.solarLights.title"),
      description: t("products.solarLights.description"),
    },
    {
      id: 6,
      image: "/images/products/ev-charger.avif",
      title: t("products.evCharging.title"),
      description: t("products.evCharging.description"),
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">
            {t("products.heading")}
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            {t("products.subheading")}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              itemScope
              itemType="https://schema.org/Product"
            >
              <figure className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={`Image of ${product.title}`}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  itemProp="image"
                />
              </figure>

              <h3
                className="text-2xl font-semibold mt-4 text-green-700"
                itemProp="name"
              >
                {product.title}
              </h3>

              <p className="text-gray-600 mt-2" itemProp="description">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
