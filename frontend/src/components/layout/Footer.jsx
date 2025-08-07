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
    <footer className="bg-gray-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <section aria-labelledby="footer-about">
            <p id="footer-about" className="text-2xl font-bold text-green-400">
              Divine Energy
            </p>
            <p className="mt-2 text-gray-300">{t("footer.description")}</p>
          </section>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xl font-semibold text-green-400">
              Quick Links
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#about"
                  title="About Us section"
                  className="hover:text-green-300"
                >
                  {t("footer.about_us")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  title="Our Services section"
                  className="hover:text-green-300"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  title="Our Products section"
                  className="hover:text-green-300"
                >
                  {t("footer.products")}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  title="Our Projects section"
                  className="hover:text-green-300"
                >
                  {t("footer.projects")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  title="Contact Us section"
                  className="hover:text-green-300"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <address>
            <h3 className="text-xl font-semibold text-green-400">Follow Us</h3>
            <div
              className="flex justify-center md:justify-start space-x-4 mt-2"
              aria-label="Social media links"
            >
              <a
                href="https://facebook.com/divineenergy" // replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="text-gray-300 hover:text-green-300 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/divineenergy" // replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="text-gray-300 hover:text-green-300 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/divineenergy" // replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                className="text-gray-300 hover:text-green-300 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/company/divineenergy" // replace with your actual URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-gray-300 hover:text-green-300 text-2xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </address>
        </div>

        {/* Admin Login & Copyright */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Divine Energy. All Rights Reserved.
          </p>

          <Link
            to="/admin-login"
            title="Admin Login"
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
              title="Prakash Parmar on LinkedIn"
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
