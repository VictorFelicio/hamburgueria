import axios from 'axios';
import { SnackData } from '../interfaces/SnackData';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getBurgers = () => api.get<SnackData[]>('/burgers');
export const getPizzas = () => api.get<SnackData[]>('/pizzas');
export const getDrinks = () => api.get<SnackData[]>('/drinks');
export const getCandys = () => api.get<SnackData[]>('/candys');
