import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import styles from "../components/Footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className={styles.background}>
      <div className="container pt-3 pb-2">
        <footer className="pt-5 mt-4">
          <ul className="nav justify-content-center">
            <Link
              className={styles.paragraph}
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              delay={100}
              duration={1000}
            >
              Início
            </Link>
            <Link
              className={styles.paragraph}
              to="serviços"
              spy={true}
              smooth={true}
              offset={-30}
              delay={100}
              duration={1000}
            >
              Serviços
            </Link>
            <Link
              className={styles.paragraph}
              to="preços"
              spy={true}
              smooth={true}
              offset={-30}
              delay={100}
              duration={1000}
            >
              Preços
            </Link>
            <Link
              className={styles.paragraph}
              to="contato"
              spy={true}
              smooth={true}
              offset={-30}
              delay={100}
              duration={1000}
            >
              Contato
            </Link>
          </ul>
          <ul className="nav justify-content-center border-bottom pb-5 mb-3 pt-3">
            <FaFacebook className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaTiktok className={styles.icon} />
          </ul>
          <p className="text-center text-white mb-2">
            &copy; 2023. Desenvolvido por{" "}
            <span>
              <a
                className={styles.copy}
                href="https://matheusariza.com/"
                rel="noreferrer"
                target="_blank"
              >
                Matheus Ariza
              </a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
