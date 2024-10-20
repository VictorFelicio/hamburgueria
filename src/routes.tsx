import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import { Burgers } from './pages/Main/Burgers';
import { Pizzas } from './pages/Main/Pizzas';
import { Candys } from './pages/Main/Candys';
import { Sodas } from './pages/Main/Sodas';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<Burgers />} />
                <Route path="pizzas" element={<Pizzas />} />
                <Route path="drinks" element={<Sodas />} />
                <Route path="candys" element={<Candys />} />
            </Route>
        </Routes>
    );
}