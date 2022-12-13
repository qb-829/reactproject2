

import { combineReducers } from "redux";
import setWatchListReducer from "./WatchListReducer";
import addMovieReducer from "./AddMovieReducer";


const allReducers = combineReducers({
    addedToWatchList: setWatchListReducer,
    movieName: addMovieReducer
})

export default allReducers;