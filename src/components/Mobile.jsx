import mobileImg from "../img/mobile.webp";
import QRcodeImg from "../img/QRcode.png";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import styles from '../components/Mobile.module.css'

const Mobile = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row p-5 pb-0 pe-md-5 pt-0 align-items-center text-center rounded-3 border shadow-lg">
          <div className="col-xl-7 text-xl-start col-md-12 text-md-center p-3 mt-5 mb-5">
            <h1 className="display-6 fw-bold text-body-emphasis">
              Conheça o OwlGym App:
            </h1>
            <p className="lead">
              Com o nosso aplicativo você conta com rotinas de exercícios
              personalizadas, além de pode visualizar exercícios e assistir as
              aulas de nossos professores.
            </p>
            <small>E o melhor? Não possui nenhum valor adicional!</small>
            <br />
            <small>
              Escanei o QR Code ou clique para baixar o app em seu dispositivo
              móvel.
            </small>

            <div className="container">
              <div className="row">
                
                <div className={styles.qrContainer}>
                  <div className={styles.qR}>
                    <img className="mt-3" src={QRcodeImg} width={200} height={200} />
                  </div>
                  <div className={styles.iconContainer}>
                    <FaAppStore className={styles.icon}/>
                    <IoLogoGooglePlaystore className={styles.icon}/><br/>
                    Clique no ícone para baixar o app ou leia o Qr Code
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img src={mobileImg} alt="Mobile App" width="620" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
