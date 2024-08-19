import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import useLocalStorage from "../hook/useLocalStorage";
import { ModalContext } from "../context";
import Modal from "../components/Modal";
import "../styles/favourite.css";

const Favourites = () => {
  const { openModal } = useContext(ModalContext);
  const { getLocalStorage } = useLocalStorage("FAVS");
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    setFavs(getLocalStorage());
  }, [getLocalStorage]); // Incluye 'getLocalStorage' como dependencia

  return (
    <div className="Favourites">
      <Header />
      <section className="Favourites__container">
        {openModal && <Modal />}
        {favs?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            temperaments={item.temperaments}
            name={item.name}
            weight={item.weight}
            isFav={item.isFav}
          />
        ))}
      </section>
    </div>
  );
};

export default Favourites;
