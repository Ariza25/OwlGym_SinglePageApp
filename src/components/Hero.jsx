import backgroundImg from '../img/background.jpeg'
import styles from "../components/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className="container col-xxl-8 px-4">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={backgroundImg} className={styles.heroImg} alt="Gym" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Aqui todos os desafios se tornam conquistas</h1>
        <p className="lead">Não apenas levantamos pesos, mas também elevamos o seu condicionamento físico e potencial a novos patamares! Seja você um iniciante ansioso ou um atleta experiente, a <strong>OwlGym</strong> é o lugar ideal para alcançar seus objetivos.<br/>
        <br/>🦉 <strong>#OwlGymTransforma</strong></p>
        <span className=""></span>
        <div className="d-flex justify-content-start">
            <div className="button"></div>
          <button type="button" className="btn btn-secondary btn-lg px-4 mt-3">Saiba Mais</button>
        </div>
      </div>
    </div>
  </div>
    </>

  )
}

export default Hero