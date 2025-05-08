import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "subsidy",
        "products",
        "projects",
        "testimonials",
        "blog",
        "contact",
      ];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", title: t("home") },
    { id: "about", title: t("about") },
    { id: "services", title: t("servicesNav") },
    { id: "subsidy", title: t("subsidyNav") },
    { id: "products", title: t("productsNav") },
    { id: "projects", title: t("projectsNav") },
    { id: "testimonials", title: t("testimonialsNav") },
    { id: "blog", title: t("blogNav") },
    { id: "contact", title: t("contactNav") },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center">
        <h1 className="text-2xl font-extrabold text-white md:text-3xl">
          DIVINE ENERGY
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={300}
            offset={-70}
            className={`relative cursor-pointer px-2 py-2 transition-all hover:text-green-400 ${
              activeSection === item.id ? "text-green-400 font-bold" : ""
            }`}
          >
            {item.title}
            {activeSection === item.id && (
              <div className="absolute left-0 bottom-[-2px] h-[3px] w-full bg-green-400 rounded-full transition-all duration-300" />
            )}
          </Link>
        ))}
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-gray-800 text-white px-3 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="en">En</option>
          <option value="hi">हिन्दी</option>
          <option value="gu">ગુજ</option>
        </select>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes size={30} className="text-white" />
        ) : (
          <FaBars size={30} className="text-white" />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center space-y-6 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={300}
              offset={-70}
              className="text-white hover:text-green-400 text-2xl transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          {/* Language Switcher for Mobile */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="bg-gray-800 text-white px-3 py-2 rounded-md border border-gray-600"
          >
            <option value="en">En</option>
            <option value="hi">हिन्दी</option>
            <option value="gu">ગુજ</option>
          </select>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
