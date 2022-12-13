

const setWatchListReducer = (state = false, action) => {
    switch(action.type) {
        case "ISCHECKED":
            return true;
        default:
            return state;    
    }
}