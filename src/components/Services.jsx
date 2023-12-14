import styles from "../components/Services.module.css";

const Services = () => {
  return (
    <>
      <div className="text-center mt-3 fw-bold" id="serviços">
        <h2 className={styles.title}>SERVIÇOS OFERECIDOS</h2>
      </div>

      <div className={styles.container}>
        <div className="d-flex w-100 my-5">
          <div className="text-bg-dark px-5 px-md-3 pt-4 text-center overflow-hidden col-sm-6">
            <div className="my-3 py-3">
              <h2 className="display-5">Academia</h2>
              <p className="lead">
                A academia desempenha um papel crucial na promoção da saúde
                física e mental, proporcionando um ambiente dedicado ao
                condicionamento físico e ao bem-estar geral. Esses espaços são
                projetados para oferecer uma variedade de atividades físicas e
                programas de treinamento, adaptados às necessidades e metas
                individuais.
              </p>
            </div>
          </div>
          <div className="text-bg-white p-3 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Natação</h2>
              <p className="lead">
                Este esporte proporciona uma série de benefícios para a saúde,
                incluindo o fortalecimento dos músculos, melhoria da resistência
                cardiovascular, aumento da flexibilidade e melhoria da postura.
                Além disso, a natação é frequentemente recomendada como uma
                atividade terapêutica para pessoas com lesões ou condições
                médicas específicas, devido ao seu impacto mínimo nas
                articulações.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className="d-flex w-100 my-3 pb-5">
          <div className="text-bg-white col-sm-6 px-5 pt-4 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Pilates</h2>
              <p className="lead">
                O Pilates é um sistema de exercícios desenvolvido por Joseph
                Pilates no início do século XX, com o objetivo de melhorar a
                força, flexibilidade, equilíbrio e consciência corporal. Sua
                importância reside em uma abordagem holística para o
                condicionamento físico, integrando mente e corpo.{" "}
              </p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto pb-5"></div>
          </div>
          <div className="text-bg-dark p-3 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Cross-fit</h2>
              <p className="lead">
                O CrossFit é uma abordagem de treinamento físico que tem ganhado
                popularidade significativa devido à sua ênfase na diversidade de
                movimentos funcionais, intensidade e comunidade. Esses elementos
                combinados contribuem para uma abordagem abrangente e motivadora
                para a aptidão física, atraindo uma ampla gama de praticantes.
              </p>
            </div>
            <div className="bg-dark shadow-sm mx-auto"></div>
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <p className="d-inline-flex gap-1 w-100">
          <a
            className="btn btn-outline-secondary w-100 fs-4"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            Academia
          </a>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
                A academia desempenha um papel crucial na promoção da saúde
                física e mental, proporcionando um ambiente dedicado ao
                condicionamento físico e ao bem-estar geral. Esses espaços são
                projetados para oferecer uma variedade de atividades físicas e
                programas de treinamento, adaptados às necessidades e metas
                individuais.
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <p className="d-inline-flex gap-1 w-100">
          <a
            className="btn btn-outline-secondary w-100 fs-4"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            Natação
          </a>
        </p>
        <div className="collapse" id="collapseExample2">
          <div className="card card-body">
                Este esporte proporciona uma série de benefícios para a saúde,
                incluindo o fortalecimento dos músculos, melhoria da resistência
                cardiovascular, aumento da flexibilidade e melhoria da postura.
                Além disso, a natação é frequentemente recomendada como uma
                atividade terapêutica para pessoas com lesões ou condições
                médicas específicas, devido ao seu impacto mínimo nas
                articulações.
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <p className="d-inline-flex gap-1 w-100">
          <a
            className="btn btn-outline-secondary w-100 fs-4"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            Pilates
          </a>
        </p>
        <div className="collapse" id="collapseExample3">
          <div className="card card-body">
                O Pilates é um sistema de exercícios desenvolvido por Joseph
                Pilates no início do século XX, com o objetivo de melhorar a
                força, flexibilidade, equilíbrio e consciência corporal. Sua
                importância reside em uma abordagem holística para o
                condicionamento físico, integrando mente e corpo.
          </div>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <p className="d-inline-flex gap-1 w-100">
          <a
            className="btn btn-outline-secondary w-100 fs-4"
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            CrossFit
          </a>
        </p>
        <div className="collapse" id="collapseExample4">
          <div className="card card-body">
                O CrossFit é uma abordagem de treinamento físico que tem ganhado
                popularidade significativa devido à sua ênfase na diversidade de
                movimentos funcionais, intensidade e comunidade. Esses elementos
                combinados contribuem para uma abordagem abrangente e motivadora
                para a aptidão física, atraindo uma ampla gama de praticantes.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
