import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+916354051676";
    const message = encodeURIComponent(
      "Hello, I'm interested in a free consultation."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/bg/hero-bg.avif')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 px-6 max-w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          {t("hero_title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-full mx-auto">
          {t("hero_description")}
        </p>
        <button
          onClick={handleWhatsAppRedirect}
          className="mt-6 px-8 py-4 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer"
        >
          {t("hero_button")}
        </button>
      </div>
    </section>
  );
};

export default Home;
