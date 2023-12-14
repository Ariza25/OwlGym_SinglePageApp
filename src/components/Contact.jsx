import styles from "../components/Contato.module.css";
import { useState, useCallback, useEffect } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const firebaseConfig = {
  apiKey: "AIzaSyBkeAfN35xTcMPjiAd-6Es0gidJkAyU3Wg",
  authDomain: "owlgym-f9e72.firebaseapp.com",
  databaseURL: "https://owlgym-f9e72-default-rtdb.firebaseio.com",
  projectId: "owlgym-f9e72",
  storageBucket: "owlgym-f9e72.appspot.com",
  messagingSenderId: "798544780691",
  appId: "1:798544780691:web:724fd153bc1e5eb76a1c66",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dataCollectionRef = collection(db, "messageForm");

const Contact = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      function notifySuccess() {
        toast.success("Formulário enviado com sucesso",{
          autoClose: 1500,
        })}

      function notifyError() {
        toast.error("Ocorreu um erro. Tente mais tarde",{
          autoClose: 1500,
        })}

      const { name, email, subject, message } = formState;

      if (!name || !email || !subject || !message) {
        return;
      }

      try {
        // Adicione os dados do formulário à coleção "messageForm" no Firebase
        await addDoc(dataCollectionRef, formState);
        // Limpe o formulário após o envio bem-sucedido
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        notifySuccess();
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        notifyError();
      }
    },
    [formState]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(dataCollectionRef);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="text-center mt-3 fw-bold" id="contato">
        <h2 className={styles.title}>Contato</h2>
      </div>

      <div className="container rounded-2 my-4">
        <div className="row">
          <div className="col-11 col-lg-6 ms-3">
            <div className="text-start text-dark pt-5">
              <h4>Entre em contato:</h4> 
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3 mt-5">
                <input
                  type="name"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Matheus Ariza"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.currentTarget?.value || "",
                    })
                  }
                />
                <label htmlFor="floatingInput">Nome Completo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.currentTarget?.value || "",
                    })
                  }
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Assunto"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      subject: e.currentTarget?.value || "",
                    })
                  }
                />
                <label htmlFor="floatingPassword">Assunto</label>
              </div>
              <div className="form-floating mb-3 mt-3">
                <textarea
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Retire sua dúvida"
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      message: e.currentTarget?.value || "",
                    })
                  }
                ></textarea>
                <label htmlFor="floatingInput">Retire sua dúvida</label>
              </div>
              <button type="submit" className="btn btn-outline-dark mt-3 px-5 mb-5">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-11 col-lg-5 ms-lg-5 border-start mt-2 mb-3">
            <div className={styles.adress}>
              <FaLocationDot className={styles.iconAdress} size={30}/>
              <h4 className="text-center text-dark mt-3">Endereço</h4>
              <p className="text-center pt-2 text-dark">
                Av. Bento Ferraz de Campos, 98
                <br />
                São Paulo - SP <br />
                CEP: 12345-678
              </p>
              <MdAccessTime className={styles.iconTime} size={30}/>
              <h4 className="text-center pt-4 text-dark">Horário de funcionamento</h4>
              <p className="text-center pt-2 text-dark">
                Seg-Sex: 06:00 - 22:00
                <br />
                Sábado: 08:00 - 19:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
