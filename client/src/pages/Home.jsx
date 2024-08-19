import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { useState, useEffect, useContext } from "react";
import { ModalContext } from "../context";
import {
  getAllDogs,
  getAllTemperaments,
  filterDogs,
  resetFilters,
  getDogByName,
} from "../redux/actions/";
import { useSelector, useDispatch } from "react-redux";
import "../styles/home.css";
import useLocalStorage from "../hook/useLocalStorage";

const Home = () => {
  const { openModal } = useContext(ModalContext);
  const { createDic } = useLocalStorage("FAVS");
  const { filteredDogs, temperaments, loading } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [filterOptions, setFilterOptions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handlerFilters = (e) => {
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.value,
    });
  };

  const onSearch = (name) => {
    dispatch(getDogByName(name, createDic()));
    setCurrentPage(1);
  };

  const handlerResetFilters = () => {
    dispatch(resetFilters());
    setFilterOptions({});
    setCurrentPage(1);
  };

  const sendFiltersOptions = () => {
    dispatch(filterDogs(filterOptions));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getAllDogs(createDic()));
    dispatch(getAllTemperaments());
  }, []); // Incluye 'dispatch' y 'createDic' en la lista de dependencias

  return (
    <div className="Home">
      <Header />
      <SearchBar onSearch={onSearch} />
      <Filter
        handlerFilters={handlerFilters}
        temperaments={temperaments}
        sendFiltersOptions={sendFiltersOptions}
        resetFilters={handlerResetFilters}
      />
      {openModal && <Modal />}
      {loading && <Loader />}
      {!loading && (
        <>
          <section className="Home__data">
            <Cards allDogs={filteredDogs[currentPage]} />
          </section>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;
