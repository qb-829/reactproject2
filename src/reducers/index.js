const addMovieReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_MOVIE": {
            console.log("BAM!")
            return [...state, 
                {
                title: action.payload,
                }
            ]
        }
        default:
            return state;    
    
    }
}
export default addMovieReducer;