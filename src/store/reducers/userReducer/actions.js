import { jwtDecode } from "jwt-decode";

export const authUser = (token) => {
    return (dispatch) => {
        localStorage.setItem('token', JSON.stringify(token))

        const decoded = jwtDecode(token);
        const name = decoded.given_name;
        const surname = decoded.family_name;
        const email = decoded.email;
        const image = decoded.picture;

        const user = {
            name: name,
            surname: surname,
            email: email,
            image: image
        };

        dispatch({ type: 'USER_SIGNIN', payload: user });
    };
}

export const userLogout = () => {
    return(dispatch) => {
        localStorage.removeItem('token');
        dispatch({ type: 'USER_LOGOUT' });
    };
}
