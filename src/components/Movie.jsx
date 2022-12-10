import {useEffect, useState } from 'react';
import axios from 'axios';
    

export default async function getMovie() {

    const url =`https://api.themoviedb.org/3/discover/movie?with_genres=action&primary_release_year=2022&sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_APIKEY}`
        
    try {
        const data = await axios.get( url )
        let movieArr = data.data.results;
        console.log(movieArr);


    } catch (error) {
        console.log(error)
    }


}
