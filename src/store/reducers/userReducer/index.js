const initState = {
    user: null,
    isAuth: false
}

const UserReducer = (state = initState, action) => {
    switch(action.type) {
        case "USER_SIGNIN":
            return {...state, isAuth: true, user: action.payload};
        case "USER_LOGOUT":
            return {...state, isAuth: false, user: null};
        default: return state;
    }
}

export default UserReducer;