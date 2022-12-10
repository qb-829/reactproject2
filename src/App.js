import Home from './components/Home';
import Movie from './components/Movie';
import Watchlist from './components/Watchlist';
import Navigation from './components/sub-components/Navbar';
import axios from 'axios';
import { useState } from 'react'

import '../src/components/assets/styles/baselayout.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([])

  const handleSubmit = (e, movieTitle) => {
    e.preventDefault();

    console.log('printing');
      
    getMovie(movieTitle)
  }

  async function getMovie(movieTitle) {

    const url =`https://api.themoviedb.org/3/search/movie?&sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_APIKEY}&query=${movieTitle}`

        
    try {
        const data = await axios.get( url )
        let movieArr = data.data.results;
        console.log(movieArr);
        setSearchResults(movieArr)

        // const movieList = movieArr.map((movie) => <li>{movie}</li>);
        // <ul>{movieList}</ul> 

    } catch (error) {
        console.log(error)
    }

}

  return <>
    <Router>
      <Navigation handleSubmit={handleSubmit}/>
      <br/>
      <Routes>
        <Route path='/' element={<Home searchResults={searchResults}/>} /> 
        <Route path='/watchlist' element={<Watchlist />} /> 
        <Route path='movie' element={<Movie />} /> 
      </Routes>
    </Router>
    
  </>;
}

export default App;
