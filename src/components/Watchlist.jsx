// gets global state and all my movies to display

import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

export default function Watchlist() {
    const movieList = useSelector(state => state.movieName)

    const dispatch = useDispatch()

    console.log(movieList)

  return (
    <div>
      <h1>Watchlist</h1>
                {
                movieList.map((movie) => {
                  if (movie.movieName.movieName) {
                    return <>
                        <div class="jumbotron text-center">
                            <li>{movie.title}</li>
                            <p>{movie.overview}</p>
                            {/* <button type='submit'  onClick={(e) => makeWatchList(e, movie.title)} className='btn btn-primary' id='btn-submit'>Add Movie to Watchlist</button> */}
                          

                        </div>
                    </>
                  }
                })    
                }
          </div>
  )
}
