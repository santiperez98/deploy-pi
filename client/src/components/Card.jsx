import "../styles/card.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/actions";
import useLocalStorage from "../hook/useLocalStorage";

const Card = ({ image, name, temperaments, weight, id, isFav }) => {
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(isFav);
  const { setLocalStorage, removeLocalStorage } = useLocalStorage("FAVS");

  const handlerFavourite = () => {
    if (isFavourite) {
      removeLocalStorage(id);
      dispatch(addFavourite(id, "remove"));
    } else {
      setLocalStorage({
        image,
        name,
        temperaments,
        weight,
        id,
        isFav: true,
      });
      dispatch(addFavourite(id, "add"));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="card-container" style={{ backgroundImage: `url(${image})` }}>
      <button className="card-fav-button" onClick={handlerFavourite}>
        {isFavourite ? "🧡" : "🤍"}
      </button>
      <div className="card-info">
        <div className="info-name">
          <Link to={`/details/${id}`} style={{ textDecoration: "none", color: "#fff" }}>
            <p>{name}</p>
          </Link>
        </div>
        <div className="info-temperament">
          {temperaments?.map((item, index) => (
            <div key={index} className="temperament-item">
              {item}
            </div>
          ))}
        </div>
        <div className="info-weight">
          <p>{weight.length > 1 ? `${weight[0]} - ${weight[1]} kgs` : `${weight[0]} kgs`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
