import Logo from "../img/logo.png";
import styles from '../components/Navbar.module.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className={styles.background} id="home">
      <div className="container">
        <div className="d-flex justify-content-center">
          <img src={Logo} className={styles.logo} width={300} height={200} />
        </div>
        <header className="d-flex justify-content-center">
          <ul className="nav nav-pills">
            <li className="nav-item d-flex gap-5 mb-3">
              <Link className={styles.paragraph} to="home" spy={true} smooth={true} offset={0} delay={100} duration={1000} >Início</Link>
              <Link className={styles.paragraph} to="serviços" spy={true} smooth={true} offset={-30} delay={100} duration={1000}>Serviços</Link>
              <Link className={styles.paragraph} to="preços" spy={true} smooth={true} offset={-30} delay={100} duration={1000} >Preços</Link>
              <Link className={styles.paragraph} to="contato" spy={true} smooth={true} offset={-30} delay={100} duration={1000}>Contato</Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
