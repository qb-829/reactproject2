import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import{ Link }from 'react-router-dom'
import { addMovie } from '../actions'
import '../components/assets/styles/baselayout.css'
import '../components/assets/styles/bootstrap.css'
import '../components/assets/styles/responsive.css'

export default function Home({searchResults}) {
    const dispatch = useDispatch();

    const makeWatchList = (e, movieTitle) => {
        e.preventDefault();

            
        dispatch(addMovie(movieTitle))

    }
  return <>

    <body class='container'>
        <div class="jumbotron text-center">
            <h1>Home Page for Movie Watchlist App</h1>
            <Link to='/movie' > 
                <button class="btn btn-primary" href='./components/Movie.jsx'>
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
                            <button type='submit'  onClick={(e) => makeWatchList(e, movie.title)} className='btn btn-primary' id='btn-submit'>Add Movie to Watchlist</button>
                            


                        </div>
                        
                        {/* button will dispatch my action-save the state which will have the object with the info i want to restor -- start with the movie title then i can build a movie ojbect with other information from the api call */}
                    </>
                })    
                }
            </div>
        </div>

    </body>
        
    </>
}



