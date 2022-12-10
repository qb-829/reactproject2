import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import getMovie from '../Movie';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../../actions';
import axios from 'axios';



export default function Search(props) {
    const [movieGenre, setMovieGenre] = useState('')
    const [movieTitle, setMovieTitle] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const movieList = useSelector(addMovie)

    console.log("THE CONSOLE LOG: ", movieList);
    const dispatch = useDispatch();
  

    async function getMovie(movieTitle) {

        const url =`https://api.themoviedb.org/3/search/movie?&sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_APIKEY}&query=${movieTitle}`

            
        try {
            const data = await axios.get( url )
            let movieArr = data.data.results;
            console.log(movieArr);
            setSearchResults(movieArr)
    
    
        } catch (error) {
            console.log(error)
        }
    
    }
    return <>
        <div>Search</div>
        <Form className="d-flex">
            <Form.Control
                value={movieTitle}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <Button variant="outline-success" onClick={(e) => props.handleSubmit(e, movieTitle)}>Search</Button>
        </Form>

       
    </>
  
}
