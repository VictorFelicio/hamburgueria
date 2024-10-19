import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';
import { Burgers } from './pages/Main/Burgers';
import { Pizzas } from './pages/Main/Pizzas';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}>
                <Route path="/" element={<Burgers />} />
                <Route path="pizzas" element={<Pizzas />} />
            </Route>
        </Routes>
    );
}
