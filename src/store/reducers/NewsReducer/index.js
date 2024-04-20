const initState = {
    list: [],
    load: false
}

const NewsReducer = (state = initState, action) => {
    switch(action.type) {
        case "START_LOAD":
            return {...state, load: action.payload};
        case "LOAD_LIST":
            return {...state, list: action.payload.list, load: action.payload.load};
        case "LOAD_LIST_ERROR":
            return {...state, load: action.payload.load};
        default:
            return state;
    }
}

export default NewsReducer;