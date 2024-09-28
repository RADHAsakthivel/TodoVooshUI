// utils/cookies.js
import Cookies from 'js-cookie';

export const setToken = (token) => {
    Cookies.set('token', token, { expires: 7, path: '' }); // expires in 7 days
};

export const getToken = () => {
    return Cookies.get('token'); // Retrieves the token
};

export const removeToken = () => {
    Cookies.remove('token'); // Removes the token
};
