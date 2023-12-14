import styles from "../components/Whats.module.css";
import { FaWhatsappSquare } from "react-icons/fa";


const Whats = () => {
  return (
    <div>
      <a
        className={styles.whats}
        href="https://web.whatsapp.com/send?phone=5543998068708"
        rel="noreferrer"
        target="_blank"
      >
        <FaWhatsappSquare size={65} />
      </a>
    </div>
  );
};

export default Whats;
