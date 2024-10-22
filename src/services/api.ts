import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getBurgers = () => api.get('/burgers');
export const getPizzas = () => api.get('/pizzas');
export const getDrinks = () => api.get('/drinks');
export const getCandys = () => api.get('/candys');
