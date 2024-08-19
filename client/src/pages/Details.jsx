import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDogByID, cleanDetails } from "../redux/actions";
import { useEffect, useContext } from "react";
import { ModalContext } from "../context";
import Modal from "../components/Modal";
import Header from "../components/Header";
import "../styles/detail.css";

const Details = () => {
  const { openModal } = useContext(ModalContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailDog } = useSelector((state) => state);

  useEffect(() => {
    dispatch(cleanDetails());
    dispatch(getDogByID(id));
  }, [dispatch, id]); // Incluye 'dispatch' y 'id' como dependencias

  return (
    <>
      {openModal && <Modal />}
      <Header show={true} />
      <section className="Details">
        <section className="Details__container">
          <img className="Details__image" src={detailDog?.image} alt={detailDog?.name} />
          <div className="Details__name">
            <h1>{detailDog?.name}</h1>
          </div>
          <div className="Details__info">
            <p>
              Peso: {detailDog?.weight?.length > 1 ? detailDog?.weight?.join(" - ") : detailDog?.weight?.pop()} kgs
            </p>
            <p>
              Altura: {detailDog?.height?.length > 1 ? detailDog?.height?.join(" - ") : detailDog?.height?.pop()} cm
            </p>
            <p>Años de vida: {detailDog?.life_span}</p>
          </div>
          <div className="Details__temperament">
            {detailDog?.temperaments?.map((item, index) => (
              <span key={index} className="temperament__item">{item}</span>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Details;
