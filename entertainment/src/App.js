import './App.css';
import Search from './components/search/Search';
import MoviesState from './context/movieContext/MoviesState';


function App() {
  return (
    <>
      <MoviesState>
        <Search />
      </MoviesState>

    </>
  );
}

export default App;
