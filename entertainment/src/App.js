import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './components/search/Search';
import MoviesState from './context/movieContext/MoviesState';
import Genres from './components/genres/Genres';
import Navbar from './components/Utils/Navbar';


function App() {
  return (
    <>
    <BrowserRouter>
      <MoviesState>
        <Routes>         
          <Route path='/' element={<Search />}/>
          <Route path='/movies' element={<Genres />}/>          
          <Route path='/navbar' element={<Navbar/>}/>          
        </Routes>       
      </MoviesState>
    </BrowserRouter>

    </>
  );
}

export default App;
