import styles from "../components/Prices.module.css";

const Prices = () => {
  return (
    <>
      <div className="text-center mt-5 fw-bold" id="preços">
        <h2 className={styles.title}>VALORES OFERTADOS</h2>
      </div>

      <div className={styles.containerPrice}>
        <div className="container-fluid row mb-3 text-center">
          <div className="col-xm-12 col-lg-3 ms-3 py-4">
            <div className="card rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Plano Comum</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  R$100
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Academia;</li>
                  <li>Aplicativo;</li>
                  <li>-</li>
                  <li>-</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-secondary"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>

          <div className="col-xm-12 col-lg-3 ms-3 py-4">
            <div className="card rounded-3 shadow-sm border-none">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Plano Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $250
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>2 modalidades;</li>
                  <li>Aplicativo;</li>
                  <li>Descontos em produtos;</li>
                  <li>-</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-secondary"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
          <div className="col-xm-12 col-lg-3 ms-3 py-4">
            <div className="card rounded-3 shadow-sm border-none">
              <div className="card-header py-3 text-bg-secondary border-secondary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  R$320
                  <small className="text-body-secondary fw-light">/mês</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Todos os serviços inclusos;</li>
                  <li>Aplicativo;</li>
                  <li>Personal Trainer;</li>
                  <li>Descontos em produtos;</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-secondary"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
