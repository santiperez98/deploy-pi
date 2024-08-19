import Form from "../components/Form";

import { ModalContext } from "../context";
import Modal from "../components/Modal";
import { useContext } from "react";
import "../styles/createdog.css";
import Header from "../components/Header";

const CreateDog = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      {openModal && <Modal />}
      <Header show={true} />
      <section className="Create__container">
        <div>
  
          <h3>Crea tu Perro</h3>
        </div>
        <Form />
      </section>
    </>
  );
};

export default CreateDog;
