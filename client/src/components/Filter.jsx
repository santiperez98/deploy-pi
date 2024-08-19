import { useRef } from "react";
import '../styles/filters.css'; // Asegúrate de que este archivo exista y esté en la ruta correcta

const Filter = ({
  handlerFilters,
  temperaments,
  sendFiltersOptions,
  resetFilters,
}) => {
  const temperament = useRef();
  const origin = useRef();
  const order = useRef();
  const weight = useRef();

  const handlerResetFilters = () => {
    temperament.current.selectedIndex = 0;
    origin.current.selectedIndex = 0;
    order.current.selectedIndex = 0;
    weight.current.selectedIndex = 0;
    resetFilters();
  };

  return (
    <section className="home-filters">
      <select onChange={handlerFilters} name="temperament" ref={temperament} className="filter-select">
        <option value="null">Temperamentos</option>
        {temperaments?.map((item) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      <select onChange={handlerFilters} name="origin" ref={origin} className="filter-select">
        <option value="null">Origen</option>
        <option value="api">API</option>
        <option value="bd">BD</option>
      </select>
      <select onChange={handlerFilters} name="order" ref={order} className="filter-select">
        <option value="null">Orden</option>
        <option value="a-z">a-z</option>
        <option value="z-a">z-a</option>
      </select>
      <select onChange={handlerFilters} name="weight" ref={weight} className="filter-select">
        <option value="null">Peso</option>
        <option value="menor">menor-mayor</option>
        <option value="mayor">mayor-menor</option>
      </select>
      <button onClick={sendFiltersOptions} className="filter-button filter-button-apply">Filtrar</button>
      <button onClick={handlerResetFilters} className="filter-button filter-button-reset">
        Reset Filtros
      </button>
    </section>
  );
};

export default Filter;
