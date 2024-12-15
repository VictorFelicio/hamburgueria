import axios from 'axios';
import { SnackBase } from '../interfaces/SnackBase';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getBurgers = () => api.get<SnackBase[]>('/burgers');
export const getPizzas = () => api.get<SnackBase[]>('/pizzas');
export const getDrinks = () => api.get<SnackBase[]>('/drinks');
export const getCandys = () => api.get<SnackBase[]>('/candys');
