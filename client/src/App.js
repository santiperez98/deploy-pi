import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from './context';
import CreateDog from "./pages/CreateDog";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourites from "./pages/Favourites";
import IntroPage from './pages/IntroPage'; // Importa el nuevo componente
import useLocalStorage from "./hook/useLocalStorage";
import './styles/app.css';

function App() {
  const { createLocalStorage } = useLocalStorage('FAVS');
  createLocalStorage();

  return (
    <ModalProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<IntroPage />} />  
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/createDog" element={<CreateDog />} />
          <Route exact path='/favoritos' element={<Favourites />} />
        </Routes>      
      </div>
    </ModalProvider>
  );
}

export default App;
