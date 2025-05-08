import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUsers, FaBolt, FaClock } from "react-icons/fa";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 bg-gray-100">
      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-green-700">
            {t("about_title")}
          </h2>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed">
            {t("about_description")}
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src="/images/about/about.avif"
            alt="About Devine Energy"
            loading="lazy"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Achievements */}
      <div className="mt-12 container mx-auto px-6 bg-white shadow-md p-8 rounded-lg md:mx-auto max-w-full">
        <h3 className="text-3xl font-semibold text-green-700 text-center">
          {t("achievements")}
        </h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: <FaProjectDiagram />,
              label: t("projects_completed"),
              target: 500,
            },
            { icon: <FaUsers />, label: t("happy_clients"), target: 1000 },
            { icon: <FaBolt />, label: t("energy_generated"), target: 10 },
            { icon: <FaClock />, label: t("industry_experience"), target: 5 },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-green-600 text-5xl mx-auto"
              >
                {item.icon}
              </motion.div>
              <h4 className="text-xl font-bold mt-2 text-green-700">
                <Counter target={item.target} />+
              </h4>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
