import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{ Link }from 'react-router-dom'
import { addMovie } from '../actions'
import '../components/assets/styles/baselayout.css'
import '../components/assets/styles/bootstrap.css'
import '../components/assets/styles/responsive.css'

export default function Home({searchResults}) {
    const [watchList, setWatchList] = useState([]);
    const [movieTitle, setMovieTitle] = useState('');

    const movieList = useSelector(state => state.movieName);
    const dispatch = useDispatch();

    const handleSumbit = (e, movieTitle) => {
        e.preventDefault();
        console.log('make watch list');
        setMovieTitle(movieTitle)
        setWatchList(watchList + movieTitle)
        dispatch(addMovie(movieTitle))
        console.log(movieList)
        console.log(watchList);


    }
  return <>

    <body class='container'>
        <div class="jumbotron text-center">
            <h1>Home Page for Movie Watchlist App</h1>
            <Link to='/movie' > 
                <button class="btn btn-primary" href='./components/Watchlist.jsx'>
                    Enter Site
                </button>
            </Link>
        </div>
<br/>
<br/>
<br/>
            <div>
            <div>
                
                {
                searchResults.map((movie) => {
                    return <>
                        <div class="jumbotron text-center">
                            <li>{movie.title}</li>
                            <p>{movie.overview}</p>
                            <button type='submit'  onClick={(e) => handleSumbit(e, movie.title)} className='btn btn-primary' id='btn-submit'>Add Movie to Watchlist</button>

                        </div>
                        
                        {/* button will dispatch my action-save the state which will have the object with the info i want to restor -- start with the movie title then i can build a movie ojbect with other information from the api call */}
                    </>
                })    
                }
            </div>
           <div>
            <h1>Watchlist</h1>
            {
                movieList.map((movie) => {
                    return <>
                        <div class="jumbotron text-center">
                            <h2>{movie.title}</h2>
                        </div>
        
                    </>
                })    
                }
           </div>
        </div>

    </body>
        
    </>
}



