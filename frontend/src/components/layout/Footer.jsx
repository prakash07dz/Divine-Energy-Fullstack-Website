import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-400">Divine Energy</h2>
            <p className="mt-2 text-gray-300">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              {/* {t("footer.quick_links")} */} Quick Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#about" className="hover:text-green-300">
                  {t("footer.about_us")}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-300">
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-green-300">
                  {t("footer.products")}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-green-300">
                  {t("footer.projects")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-300">
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-green-400">
              {/* {t("footer.follow_us")} */} Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300 hover:text-green-300 text-2xl cursor-default"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300 hover:text-green-300 text-2xl cursor-default"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300 hover:text-green-300 text-2xl cursor-default"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-300 hover:text-green-300 text-2xl cursor-default"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Admin Login & Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Divine Energy. All Rights Reserved.
          </p>

          <Link
            to="/admin-login"
            className="mt-2 md:mt-0 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-all"
          >
            Admin Login
          </Link>
        </div>

        {/* Developer Credit */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Made by
            <a
              href="https://www.linkedin.com/in/prakashparmar1503/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              &nbsp; Prakash Parmar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
