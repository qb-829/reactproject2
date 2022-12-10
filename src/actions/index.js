export const addMovie = (movieTitle) => {
    console.log('action activated - add movie')
    console.log(movieTitle);
    return {
        type: "ADD_MOVIE",
        payload: movieTitle
    }

}

export const setWatchList = (movieTitle) => {

    return {
        type: "SET_WATCHLIST",
        payload: movieTitle
    }

}